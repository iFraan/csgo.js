type Url = string;

export type PlayerDBResponse = {
    success: boolean;
    message?: string;
    error: boolean;
    code: 'player.found' | 'steam.invalid_id';
    data: {
        player: PlayerDB
    }
};

export type PlayerDB = {
    meta: PlayerInfo,
    id: string,
    avatar: Url,
    username: string
};

export type PlayerInfo = {
    steam2id: string,
    steam2id_new: string,
    steam3id: string,
    steam64id: string,
    steamid: string,
    communityvisibilitystate: number, // enum
    profilestate: number, // enum
    personaname: string,
    commentpermission: number,
    profileurl: Url,
    avatar: Url,
    avatarmedium: Url,
    avatarfull: Url,
    avatarhash: string,
    personastate: number, // enum
    primaryclanid: string,
    timecreated: number,// timestamp
    personastateflags: number, // enum
    loccountrycode: string, // enum?
}
