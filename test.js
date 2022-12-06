const { API } = require('./index');
const { STEAM_KEY } = require('./keys.json')

m = (async () => {

    try {
        const user = await API.fetchUser('iFraan_', STEAM_KEY);
        const maps = user.maps()
        const stats = user.stats()
        console.log(stats)
    } catch (e) {
        console.log(e)
    }

})

m()