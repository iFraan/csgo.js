import axios from 'axios';
import { parseItems } from './lib/util';
/* constants */
import WEAPONS from './constants/weapons';
import MAPS from './constants/maps';
/* types */
import { PlayerDBResponse, PlayerInfo } from './types/player';
import { Steam64Response, SteamResponse } from './types/steam';
import { GeneralStats, LastMatchStats, MapStats, ParsedData, ParsedItem, UnknownStats, WeaponsStats } from './types/stats';

const STEAM64_REGEX = /^\d{17}$/;

const URLS = {
    stats: 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key={APIKEY}&steamid={STEAMID}',
    player: 'https://playerdb.co/api/player/steam/{PLAYER}',
    steam64: 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key={APIKEY}&vanityurl={PLAYER}',
} as const;

const fetch = (url: string) =>
    new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response.data);
            });
    });

const getPlayerSteam64 = async (apiKey: string, username: string) => {
    /* if it is already an possible valid id */
    if (STEAM64_REGEX.test(username)) return username;

    try {
        const { response: player }: Steam64Response = (await fetch(URLS.steam64.replace('{PLAYER}', username).replace('{APIKEY}', apiKey))) as Steam64Response;
        if (player?.success === 1) {
            return player.steamid as string;
        }
        /* force an error if no match is found */
        throw new Error(player?.message ?? `Couldn't find a steam user/id with ${username}`);
    } catch (e) {
        throw new Error(e);
    }

    return undefined; /* you never know */
};

type Raw = {
    player: PlayerDBResponse;
    stats: SteamResponse;
};

class CSAPI {
    username: string;
    steamKey: string;
    _raw: Raw;
    data: ParsedData;
    player: PlayerDBResponse | undefined;
    steam: SteamResponse | undefined;

    /**
     * Use API.fetchUser instead.
     * @param {string} username
     * @param {string} apiKey
     * @private // idk if it does something outside of typescript, but there it is
     */
    constructor(username: string, apiKey: string) {
        this.username = username;
        this.steamKey = apiKey;
        this._raw = {} as Raw;
        this.data = [] as ParsedData;
    }

    /**
     * Initialize the wrapper
     * @param {string} apiKey
     * @param {string} username
     * @returns API instance
     */
    static async fetchUser(username: string, apiKey: string) {
        const API = new CSAPI(username, apiKey);
        if (typeof username === 'undefined') throw new Error('You have to provide an username.');
        if (typeof apiKey === 'undefined') throw new Error('You have to provide a Steam API key. You can get one here: https://steamcommunity.com/dev/apikey');
        try {
            /* test username for id */
            const steam64: string = await getPlayerSteam64(API.steamKey, username);
            /* fetch data */
            API.player = (await fetch(URLS.player.replace('{PLAYER}', steam64))) as PlayerDBResponse;
            if (!API.player?.success) throw new Error(API.player?.message ?? `Couldn't find a steam user/id with ${username}`);
            API.steam = (await fetch(URLS.stats.replace('{STEAMID}', API.player.data.player.id).replace('{APIKEY}', API.steamKey))) as SteamResponse;
            API._raw.stats = API.steam;
            API._raw.player = API.player;
            /* parse data */
            API.data = parseItems(API.steam) as ParsedData;
        } catch (e) {
            console.log(e);
            if (e?.code == 'steam.invalid_id') throw new Error('Invalid steam username/id.');
            throw new Error(e.message);
        }
        return API;
    }
    /**
     * Get userinfo
     * @returns PlayerInfo
     */
    info(): PlayerInfo {
        const user = this.player?.data?.player?.meta || {};
        return user as PlayerInfo;
    }

    /**
     * Get general stats
     * @returns GeneralStats
     */
    stats(): GeneralStats {
        const stats = this.data.filter((x) => x.category === 'Stats');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data as GeneralStats;
    }

    /**
     * Get unkonwn stats
     * @returns UnknownStats
     */
    unknown() {
        const stats = this.data.filter((x) => x.category === 'Unknown');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data as UnknownStats;
    }

    /**
     * Get maps stats
     * @returns MapStats
     */
    maps() {
        const maps = this.data.filter((x) => x.category === 'Maps');
        const wins = maps.filter((x) => x.key.endsWith('_wins')).map((x) => ({ ...x, key: x.key.replace('_wins', '') }));
        const played = maps.filter((x) => x.key.endsWith('_played')).map((x) => ({ ...x, key: x.key.replace('_played', '') }));
        const data = {};
        /* just won maps should exist in both won and played rounds  */
        for (const win of wins) {
            const _wins = win.value as number;
            const _played = (played.find((x) => x.key == win.key)?.value as number) || 0;
            data[win.key] = {
                wins: _wins,
                played: _played,
                wr: (_wins / _played).toFixed(4),
            };
        }
        return data as MapStats;
    }

    /**
     * Get weapons stats
     * @returns WeaponsStats
     */
    weapons() {
        const weapons = this.data.filter((x) => x.category === 'Weapons');
        const kills = weapons.filter((x) => x.key.endsWith('_kills')).map((x) => ({ ...x, key: x.key.replace('_kills', '') }));
        const shots = weapons.filter((x) => x.key.endsWith('_shots')).map((x) => ({ ...x, key: x.key.replace('_shots', '') }));
        const hits = weapons.filter((x) => x.key.endsWith('_hits')).map((x) => ({ ...x, key: x.key.replace('_hits', '') }));
        const data = {};
        /* a hit implies a shot */
        for (const hit of hits) {
            const _hits = hit.value as number;
            const _shots = (shots.find((x) => x.key == hit.key)?.value as number) || 0;
            const _kills = (kills.find((x) => x.key == hit.key)?.value as number) || 0;
            data[hit.key] = {
                hits: _hits,
                shots: _shots,
                kills: _kills,
                accuracy: (_hits / _shots).toFixed(4),
                kills_per_shot: (_kills / _shots).toFixed(4),
            };
        }
        return data as WeaponsStats;
    }

    /**
     * Get last match stats
     * @returns LastMatchStats
     */
    lastMatch() {
        const stats = this.data.filter((x) => x.category === 'LastMatch');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data as LastMatchStats;
    }

    get raw(): unknown {
        return { ...this._raw, data: this.data };
    }
}

export default CSAPI;
export {
    CSAPI as API,
    WEAPONS,
    MAPS,
}