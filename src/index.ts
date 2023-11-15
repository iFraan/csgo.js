import axios from 'axios';
import { parseItems } from './lib/parseItems';
/* types */
import { PlayerDBResponse, PlayerInfo } from './types/player';
import { SteamResponse } from './types/steam';

const STEAM64_REGEX = /^\d{17}$/;

const URLS = {
    stats: 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key={APIKEY}&steamid={STEAMID}',
    player: 'https://playerdb.co/api/player/steam/{PLAYER}',
    steam64: 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key={APIKEY}&vanityurl={PLAYER}',
} as const;

const key = (arr: any[], name: string) => arr[arr.indexOf(arr.find(x => x.metadata.key == name))].value;

const fetch = (url: string) => new Promise((resolve, reject) => {

    axios.get(url).then(res => {
        resolve(res.data);
    }).catch(err => {
        reject(err.response.data)
    })

})

const getPlayerSteam64 = async (apiKey: string, username: string) => {

    /* if it is already an possible valid id */
    if (STEAM64_REGEX.test(username)) return username;

    try {
        const { response: player }: any = await fetch(URLS.steam64.replace('{PLAYER}', username).replace('{APIKEY}', apiKey))
        if (player?.success === 1) {
            return player.steamid as string;
        }
        /* force an error if no match is found */
        throw new Error(player?.message || `Couldn't find a steam user/id with ${username}`)
    } catch (e) {
        throw new Error(e)
    }

    return undefined; /* you never know */
}

class CSAPI {

    username: string;
    steamKey: string;
    _raw: any;
    data: any;
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
        this._raw = {};
        this.data = {};
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
            API.player = await fetch(URLS.player.replace('{PLAYER}', steam64)) as PlayerDBResponse;
            if (!API.player?.success) throw new Error(API.player?.message || `Couldn't find a steam user/id with ${username}`)
            API.steam = await fetch(URLS.stats.replace('{STEAMID}', API.player.data.player.id).replace('{APIKEY}', API.steamKey)) as SteamResponse;
            API._raw.stats = API.steam;
            API._raw.player = API.player;
            /* parse data */
            API.data = parseItems(API.steam);
        } catch (e) {
            console.log(e)
            if (e?.code == 'steam.invalid_id') throw new Error('Invalid steam username/id.');
            throw new Error(e.message);
        }
        return API;
    }
    /**
     * Get userinfo
     * @returns userinfo
     */
    info() {
        const user = this._raw.player?.data?.player?.meta || {};
        return user as PlayerDBResponse;
    }

    /**
     * Get generic stats
     * @returns stats
     */
    stats() {
        const stats = this.data.filter(x => x.category === 'Stats');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data;
    }

    /**
     * Get unkonwn stats
     * @returns stats
     */
    unknown() {
        const stats = this.data.filter(x => x.category === 'Unknown');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data;
    }

    /**
     * Get maps stats
     * @returns maps
     */
    maps() {
        const maps = this.data.filter(x => x.category === 'Maps');
        const wins = maps.filter(x => x.key.endsWith('_wins')).map(x => ({ ...x, key: x.key.replace('_wins', '') }));
        const played = maps.filter(x => x.key.endsWith('_played')).map(x => ({ ...x, key: x.key.replace('_played', '') }));
        const data = {};
        /* just won maps should exist in both won and played rounds  */
        for (const win of wins) {
            const _wins = win.value;
            const _played = played.find(x => x.key == win.key)?.value || 0;
            data[win.key] = {
                wins: _wins,
                played: _played,
                wr: (_wins / _played).toFixed(4),
            };
        }
        return data;
    }

    /**
     * Get weapons stats
     * @returns maps
     */
    weapons() {
        const weapons = this.data.filter(x => x.category === 'Weapons');
        const kills = weapons.filter(x => x.key.endsWith('_kills')).map(x => ({ ...x, key: x.key.replace('_kills', '') }));
        const shots = weapons.filter(x => x.key.endsWith('_shots')).map(x => ({ ...x, key: x.key.replace('_shots', '') }));
        const hits = weapons.filter(x => x.key.endsWith('_hits')).map(x => ({ ...x, key: x.key.replace('_hits', '') }));
        const data = {};
        /* a hit implies a shot */
        for (const hit of hits) {
            const _hits = hit.value;
            const _shots = shots.find(x => x.key == hit.key)?.value || 0;
            const _kills = kills.find(x => x.key == hit.key)?.value || 0;
            data[hit.key] = {
                hits: _hits,
                shots: _shots,
                kills: _kills,
                accuracy: (_hits / _shots).toFixed(4),
                kills_per_shot: (_kills / _shots).toFixed(4),
            };
        }
        return data;
    }

    /**
     * Get last match stats
     * @returns stats
     */
    lastMatch() {
        const stats = this.data.filter(x => x.category === 'LastMatch');
        const data = {};
        for (const stat of stats) {
            data[stat.key] = stat.value;
        }
        return data;
    }

    get raw() { return { ...this._raw, data: this.data } }

}

export default CSAPI