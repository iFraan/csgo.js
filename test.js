const { API } = require('./index');
const { STEAM_KEY } = require('./keys.json')

m = (async () => {

    try {
        const user = await API.fetchUser('iFraan_', STEAM_KEY);
        const maps = user.maps()
        console.log('Maps: ', maps);
        const stats = user.stats()
        console.log('Stats: ', stats);
        const weapons = user.weapons()
        console.log('Weapons: ', weapons);
    } catch (e) {
        console.log(e)
    }

})

m()