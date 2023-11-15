export type SteamResponse = {
    playerstats: {
        steamID: string;
        gameName: string;
        stats: SteamStat[]
    }
}

type SteamStat = {
    name: string;
    value: number;
}

export type Steam64Response = {
    response: {
        success: number,
        steamid: string;
        message?: string;
    }
}