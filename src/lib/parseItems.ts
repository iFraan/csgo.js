import { SteamResponse } from '../types/steam';
import { dictionary } from './dictionary';

export const parseItems = (rawdata: SteamResponse | undefined) => {
    if (!rawdata) throw new Error('expected data');
    if (!rawdata?.playerstats?.stats) throw new Error('expected stats');
    if (!Array.isArray(rawdata.playerstats.stats)) throw new Error('expected array')
    return (rawdata.playerstats.stats).map(item => {
        if (dictionary[item.name]) {
            const { key, name, category, transform } = dictionary[item.name];
            return {
                key,
                name,
                category,
                value: transform(item.value)
            }
        }
        else {
            return {
                key: item.name,
                name: item.name,
                category: 'Unknown',
                value: item.value
            }
        }
    }).filter(Boolean);
}

export default {
    parseItems,
}