type TimePlayed = {
    seconds: number;
    hours: number;
    display: string;
};

export type GeneralStats = {
    kills: number,
    deaths: number,
    time_played: TimePlayed,
    planted_bombs: number,
    defused_bombs: number,
    wins: number,
    damage_done: number,
    money_earned: number,
    knife_kills: number,
    hegrenade_kills: number,
    headshot_kills: number,
    enemy_weapon_kills: number,
    pistol_round_wins: number,
    weapons_donated: number,
    broken_windows: number,
    kills_enemy_blinded: number,
    kills_knife_fight: number,
    kills_against_zoomed_sniper: number,
    dominations: number,
    domination_overkills: number,
    revenges: number,
    shots_hit: number,
    shots_fired: number,
    rounds_played: number,
    mvps: number,
    matches_won: number,
    matches_played: number,
    contribution_score: number,
    molotov_kills: number,
    xp_earned_games: number
};

type MapStat = {
    wins: number,
    played: number,
    wr: string;
};

export type MapStats = {
    cs_assault: MapStat,
    cs_italy: MapStat,
    cs_office: MapStat,
    de_cbble: MapStat,
    de_dust2: MapStat,
    de_dust: MapStat,
    de_inferno: MapStat,
    de_nuke: MapStat,
    de_train: MapStat,
    de_house: MapStat,
    de_vertigo: MapStat,
    ar_monastery: MapStat,
    ar_shoots: MapStat,
    ar_baggage: MapStat,
    de_lake: MapStat,
    de_stmarc: MapStat,
    de_shorttrain: MapStat,
    de_safehouse: MapStat
};

type WeaponStat = {
    hits: number,
    shots: number,
    kills: number,
    accuracy: string,
    kills_per_shot: string
};

export type WeaponsStats = {
    deagle: WeaponStat,
    glock: WeaponStat,
    elite: WeaponStat,
    fiveseven: WeaponStat,
    awp: WeaponStat,
    ak47: WeaponStat,
    aug: WeaponStat,
    famas: WeaponStat,
    g3sg1: WeaponStat,
    p90: WeaponStat,
    mac10: WeaponStat,
    ump45: WeaponStat,
    xm1014: WeaponStat,
    m249: WeaponStat,
    hkp2000: WeaponStat,
    p250: WeaponStat,
    sg556: WeaponStat,
    scar20: WeaponStat,
    ssg08: WeaponStat,
    mp7: WeaponStat,
    mp9: WeaponStat,
    nova: WeaponStat,
    negev: WeaponStat,
    sawedoff: WeaponStat,
    bizon: WeaponStat,
    tec9: WeaponStat,
    mag7: WeaponStat,
    m4a1: WeaponStat,
    galilar: WeaponStat,
};

export type UnknownStats = unknown;

export type LastMatchStats = {
    last_match_t_wins: number,
    last_match_ct_wins: number,
    last_match_wins: number,
    last_match_max_players: number,
    last_match_kills: number,
    last_match_deaths: number,
    last_match_mvps: number,
    last_match_favweapon_id: number,
    last_match_favweapon_shots: number,
    last_match_favweapon_hits: number,
    last_match_favweapon_kills: number,
    last_match_damage: number,
    last_match_money_spent: number,
    last_match_dominations: number,
    last_match_revenges: number,
    last_match_contribution_score: number,
    last_match_rounds: number,
}

export type ParsedItem = {
    key: string;
    name: string;
    category: string;
    value: unknown;
};

export type ParsedData = ParsedItem[];