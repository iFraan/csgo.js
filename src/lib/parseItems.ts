import { SteamResponse } from '../types/steam';
import { ParsedData, ParsedItem } from '../types/stats';
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
            } as ParsedItem;
        }
        else {
            return {
                key: item.name,
                name: item.name,
                category: 'Unknown',
                value: item.value
            } as ParsedItem;
        }
    }).filter(Boolean) as ParsedData;
}

export default {
    parseItems,
}