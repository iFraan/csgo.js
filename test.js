const { API } = require('./index');
const { STEAM_KEY } = require('./keys.json')

m = (async () => {

    try {
        const user = await API.fetchUser('iFraan_', STEAM_KEY)
        console.log(user)
    } catch (e) {
        console.log(e)
    }

})

m()