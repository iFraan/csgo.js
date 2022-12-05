const axios = require('axios');
const { parseItems } = require('./lib/parseItems');

const URLS = {
    stats: 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key={APIKEY}&steamid={STEAMID}',
    player: 'https://playerdb.co/api/player/steam/{PLAYER}'
}

const key = (arr, name) => arr[arr.indexOf(arr.find(x => x.metadata.key == name))].value;

const fetch = (url) => new Promise((resolve, reject) => {

    axios.get(url).then(res => {
        resolve(res.data)
    })
        .catch(err => {
            reject(err.response.data)
        })

})


class CSAPI {

    /**
     * Use API.fetchUser instead.
     * @param {string} username 
     * @param {string} apiKey 
     * @private // idk if it does something outside of typescript, but there it is
     */
    constructor(username, apiKey) {
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
    static async fetchUser(username, apiKey) {
        const API = new CSAPI(username, apiKey);
        if (typeof username == 'undefined') throw new Error('You have to provide an username.');
        if (typeof apiKey == 'undefined') throw new Error('You have to provide a Steam API key. You can get one here: https://steamcommunity.com/dev/apikey');
        try {
            /* fetch data */
            API._raw.player = await fetch(URLS.player.replace('{PLAYER}', username))
            if (!API._raw.player?.success) throw new Error(API._raw.player?.message || `Couldn't find a steam user/id with ${username}`)
            API._raw.stats = await fetch(URLS.stats.replace('{STEAMID}', API._raw.player.data.player.id).replace('{APIKEY}', API.steamKey))
            /* parse data */
            API.data = parseItems(API._raw.stats)
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
        return user;
    }

    get raw() { return this._raw; }

}




module.exports = {
    API: CSAPI,
}