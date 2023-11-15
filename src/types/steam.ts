export type SteamResponse = {
    playerstats: {
        steamID: string;
        gameName: string;
        stats: SteamStat[]
    }
}

type SteamStat = {
    name: string;
    value: any;
}