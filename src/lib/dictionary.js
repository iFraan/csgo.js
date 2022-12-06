/* name the stats (ant-like work) */

const prettyTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return `${h}h ${m}m`
}

module.exports = {
    total_kills: {
        name: 'Kills',
        key: 'kills',
        category: 'Stats',
        transform: (value) => value,
    },
    total_deaths: {
        name: 'Deaths',
        key: 'deaths',
        category: 'Stats',
        transform: (value) => value,
    },
    total_time_played: {
        name: 'Time played',
        key: 'time_played',
        category: 'Stats',
        transform: (value) => ({
            seconds: value,
            hours: Math.floor(value / 3600),
            display: prettyTime(value)
        }),
    },
    total_planted_bombs: {
        name: 'Bombs Planted',
        key: 'planted_bombs',
        category: 'Stats',
        transform: (value) => value,
    },
    total_defused_bombs: {
        name: 'Bombs Defused',
        key: 'defused_bombs',
        category: 'Stats',
        transform: (value) => value,
    },
    total_wins: {
        name: 'Wins',
        key: 'wins',
        category: 'Stats',
        transform: (value) => value,
    },
    total_damage_done: {
        name: 'Damage Done',
        key: 'damage_done',
        category: 'Stats',
        transform: (value) => value,
    },
    total_money_earned: {
        name: 'Money Earned',
        key: 'money_earned',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_knife: {
        name: 'Knife Kills',
        key: 'knife_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_hegrenade: {
        name: 'HE Grenade Kills',
        key: 'hegrenade_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_glock: {
        name: 'Glock Kills',
        key: 'glock_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_deagle: {
        name: 'Deagle Kills',
        key: 'deagle_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_elite: {
        name: 'Elite Kills',
        key: 'elite_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_fiveseven: {
        name: 'Fiveseven Kills',
        key: 'fiveseven_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_xm1014: {
        name: 'XM 1014 Kills',
        key: 'xm1014_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_mac10: {
        name: 'Mac10 Kills',
        key: 'mac10_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_ump45: {
        name: 'UMP45 Kills',
        key: 'ump45_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_p90: {
        name: 'P90 Kills',
        key: 'p90_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_awp: {
        name: 'AWP Kills',
        key: 'awp_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_ak47: {
        name: 'AK47 Kills',
        key: 'ak47_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_aug: {
        name: 'AUG Kills',
        key: 'aug_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_famas: {
        name: 'FAMAS Kills',
        key: 'famas_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_g3sg1: {
        name: 'G3SG1 Kills',
        key: 'g3sg1_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_m249: {
        name: 'M249 Kills',
        key: 'm249_kills',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_kills_headshot: {
        name: 'Headshot Kills',
        key: 'kills_by_headshot',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_enemy_weapon: {
        name: 'Kills with enemy weapons',
        key: 'enemy_weapon_kills',
        category: 'Stats',
        transform: (value) => value,
    },
    total_wins_pistolround: {
        name: 'Pistol rounds won',
        key: 'pistol_round_wins',
        category: 'Stats',
        transform: (value) => value,
    },
    total_wins_map_cs_assault: {
        name: 'Rounds won in Assault',
        key: 'cs_assault_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_cs_italy: {
        name: 'Rounds won in Italy',
        key: 'cs_italy_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_cs_office: {
        name: 'Rounds won in Office',
        key: 'cs_office_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_cbble: {
        name: 'Rounds won in Cobblestone',
        key: 'de_cbble_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_dust2: {
        name: 'Rounds won in Dust II',
        key: 'de_dust2_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_dust: {
        name: 'Rounds won in Dust',
        key: 'de_dust_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_inferno: {
        name: 'Rounds won in Inferno',
        key: 'de_inferno_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_nuke: {
        name: 'Rounds won in Nuke',
        key: 'de_nuke_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_train: {
        name: 'Rounds won in Train',
        key: 'de_train_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_weapons_donated: {
        name: 'Weapons Donated',
        key: 'weapons_donated',
        category: 'Stats',
        transform: (value) => value,
    },
    total_broken_windows: {
        name: 'Windows Broken',
        key: 'broken_windows',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_enemy_blinded: {
        name: 'Blinded Enemy Kills',
        key: 'kills_enemy_blinded',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_knife_fight: {
        name: 'Kills in Knife Fight',
        key: 'kills_knife_fight',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_against_zoomed_sniper: {
        name: 'Zoomed Sniper Kills',
        key: 'kills_against_zoomed_sniper',
        category: 'Stats',
        transform: (value) => value,
    },
    total_dominations: {
        name: 'Dominations',
        key: 'dominations',
        category: 'Stats',
        transform: (value) => value,
    },
    total_domination_overkills: {
        name: 'Dominations overkills',
        key: 'domination_overkills',
        category: 'Stats',
        transform: (value) => value,
    },
    total_revenges: {
        name: 'Revenges',
        key: 'revenges',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_hit: {
        name: 'Shots Hit',
        key: 'shots_hit',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_fired: {
        name: 'Shots fired',
        key: 'shots_fired',
        category: 'Stats',
        transform: (value) => value,
    },
    total_rounds_played: {
        name: 'Rounds Played',
        key: 'rounds_played',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_deagle: {
        name: 'Deagle shots',
        key: 'deagle_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_glock: {
        name: 'Glock shots',
        key: 'glock_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_elite: {
        name: 'Elite Shots',
        key: 'elite_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_fiveseven: {
        name: 'Five Seven Shots',
        key: 'fiveseven_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_awp: {
        name: 'AWP Shots',
        key: 'awp_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_ak47: {
        name: 'AK47 Shots',
        key: 'ak47_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_aug: {
        name: 'AUG Shots',
        key: 'aug_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_famas: {
        name: 'Famas Shots',
        key: 'famas_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_g3sg1: {
        name: 'G3SG1 Shots',
        key: 'g3sg1_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_p90: {
        name: 'P90 Shots',
        key: 'p90_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_mac10: {
        name: 'Mac10 Shots',
        key: 'mac10_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_ump45: {
        name: 'UMP45 Shots',
        key: 'ump45_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_xm1014: {
        name: 'XM1014 Shots',
        key: 'xm1014_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_shots_m249: {
        name: 'M249 Shots',
        key: 'm249_shots',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_deagle: {
        name: 'Deagle Hits',
        key: 'deagle_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_glock: {
        name: 'Glock Hits',
        key: 'glock_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_elite: {
        name: 'Elite Hits',
        key: 'elite_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_fiveseven: {
        name: 'Five Seven Hits',
        key: 'fiveseven_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_awp: {
        name: 'AWP Hits',
        key: 'awp_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_ak47: {
        name: 'AK47 Hits',
        key: 'ak47_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_aug: {
        name: 'AUG Hits',
        key: 'aug_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_famas: {
        name: 'Famas Hits',
        key: 'famas_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_g3sg1: {
        name: 'G3SG1 Hits',
        key: 'g3sg1_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_p90: {
        name: 'P90 Hits',
        key: 'p90_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_mac10: {
        name: 'Mac10 Hits',
        key: 'mac10_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_ump45: {
        name: 'UMP45 Hits',
        key: 'ump45_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_xm1014: {
        name: 'XM1014 Hits',
        key: 'xm1014_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_hits_m249: {
        name: 'M249 Hits',
        key: 'm249_hits',
        category: 'Weapons',
        transform: (value) => value,
    },
    total_rounds_map_cs_assault: {
        name: 'Rounds played in Assault',
        key: 'cs_assault_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_cs_italy: {
        name: 'Rounds played in Italy',
        key: 'cs_italy_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_cs_office: {
        name: 'Rounds played in Office',
        key: 'cs_office_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_cbble: {
        name: 'Rounds played in Cobblestone',
        key: 'de_cbble_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_dust2: {
        name: 'Rounds played in Dust II',
        key: 'de_dust2_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_inferno: {
        name: 'Rounds played in Inferno',
        key: 'de_inferno_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_nuke: {
        name: 'Rounds played in Nuke',
        key: 'de_nuke_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_train: {
        name: 'Rounds played in Train',
        key: 'de_train_played',
        category: 'Maps',
        transform: (value) => value,
    },
    last_match_t_wins: {
        name: 'LastMatch Rounds wins as Terrorist',
        key: 'last_match_t_wins',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_ct_wins: {
        name: 'LastMatch Rounds wins as Counter-Terrorist',
        key: 'last_match_ct_wins',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_wins: {
        name: 'LastMatch rounds won',
        key: 'last_match_wins',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_max_players: {
        name: 'LastMatch Max Players',
        key: 'last_match_max_players',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_kills: {
        name: 'LastMatch Kills',
        key: 'last_match_kills',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_deaths: {
        name: 'LastMatch Deaths',
        key: 'last_match_deaths',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_mvps: {
        name: 'LastMatch MVPs',
        key: 'last_match_mvps',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_favweapon_id: {
        name: 'LastMatch Favorite Weapon ID',
        key: 'last_match_favweapon_id',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_favweapon_shots: {
        name: 'LastMatch Favorite Weapon shots',
        key: 'last_match_favweapon_shots',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_favweapon_hits: {
        name: 'LastMatch Favorite Weapon hits',
        key: 'last_match_favweapon_hits',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_favweapon_kills: {
        name: 'LastMatch Favorite Weapon kills',
        key: 'last_match_favweapon_kills',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_damage: {
        name: 'LastMatch Damage',
        key: 'last_match_damage',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_money_spent: {
        name: 'LastMatch Money Spent',
        key: 'last_match_money_spent',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_dominations: {
        name: 'LastMatch Dominations',
        key: 'last_match_dominations',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_revenges: {
        name: 'LastMatch Revenges',
        key: 'last_match_revenges',
        category: 'LastMatch',
        transform: (value) => value,
    },
    total_mvps: {
        name: 'MVPs',
        key: 'mvps',
        category: 'Stats',
        transform: (value) => value,
    },
    total_rounds_map_de_lake: {
        name: 'Rounds played in Lake',
        key: 'de_lake_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_safehouse: {
        name: 'Rounds played in Safehouse',
        key: 'de_safehouse_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_stmarc: {
        name: 'Rounds played in St Marc',
        key: 'de_stmarc_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_bank: {
        name: 'Rounds played in Bank',
        key: 'de_bank_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_de_shorttrain: {
        name: 'Rounds played in Train (wingman)',
        key: 'de_shorttrain_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_TR_planted_bombs: {
        name: 'Kills',
        key: 'TR_planted_bombs',
        category: 'Stats',
        transform: (value) => value,
    },
    /* ---------------------------------------------- */
    total_gun_game_rounds_won: {
        name: 'gun_game_rounds_won',
        key: 'gun_game_rounds_won',
        category: 'Unknown',
        transform: (value) => value,
    },
    total_gun_game_rounds_played: {
        name: 'gun_game_rounds_played',
        key: 'gun_game_rounds_played',
        category: 'Unknown',
        transform: (value) => value,
    },
    /* --------------^^^^----------------------------- */
    total_wins_map_de_house: {
        name: 'Rounds won in House',
        key: 'de_house_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_vertigo: {
        name: 'Rounds won in Vertigo',
        key: 'de_vertigo_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_ar_monastery: {
        name: 'Rounds played in Monastery',
        key: 'ar_monastery_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_ar_shoots: {
        name: 'Rounds played in Shoots',
        key: 'ar_shoots_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_rounds_map_ar_baggage: {
        name: 'Rounds played in Baggage',
        key: 'ar_baggage_played',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_ar_shoots: {
        name: 'Rounds won in Shoots',
        key: 'ar_shoots_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_ar_baggage: {
        name: 'Rounds won in Baggage',
        key: 'ar_baggage_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_lake: {
        name: 'Rounds won in Lake',
        key: 'de_lake_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_stmarc: {
        name: 'Rounds won in St Marc',
        key: 'de_stmarc_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_shorttrain: {
        name: 'Rounds won in Train (wingman)',
        key: 'de_shorttrain_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_wins_map_de_safehouse: {
        name: 'Rounds won in Safehouse',
        key: 'de_safehouse_wins',
        category: 'Maps',
        transform: (value) => value,
    },
    total_matches_won: {
        name: 'Matches Won',
        key: 'matches_won',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_played: {
        name: 'Matches Played',
        key: 'matches_played',
        category: 'Stats',
        transform: (value) => value,
    },
    total_gg_matches_won: {
        name: 'GG Matches Won',
        key: 'gg_matches_won',
        category: 'Stats',
        transform: (value) => value,
    },
    total_gg_matches_played: {
        name: 'GG Matches Played',
        key: 'gg_matches_played',
        category: 'Stats',
        transform: (value) => value,
    },
    total_progressive_matches_won: {
        name: 'progressive_matches_won',
        key: 'progressive_matches_won',
        category: 'Stats',
        transform: (value) => value,
    },
    total_trbomb_matches_won: {
        name: 'trbomb_matches_won',
        key: 'trbomb_matches_won',
        category: 'Stats',
        transform: (value) => value,
    },
    total_contribution_score: {
        name: 'Contribution Score',
        key: 'contribution_score',
        category: 'Stats',
        transform: (value) => value,
    },
    last_match_contribution_score: {
        name: 'LastMatch Contribution Score',
        key: 'last_match_contribution_score',
        category: 'LastMatch',
        transform: (value) => value,
    },
    last_match_rounds: {
        name: 'LastMatch Rounds Played',
        key: 'last_match_rounds',
        category: 'LastMatch',
        transform: (value) => value,
    },
    /* WEAPONS AGAIN */
    total_kills_hkp2000: {
        name: 'Kills',
        key: 'kills_hkp2000',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_hkp2000: {
        name: 'Kills',
        key: 'shots_hkp2000',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_hkp2000: {
        name: 'Kills',
        key: 'hits_hkp2000',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_p250: {
        name: 'Kills',
        key: 'hits_p250',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_p250: {
        name: 'Kills',
        key: 'kills_p250',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_p250: {
        name: 'Kills',
        key: 'shots_p250',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_sg556: {
        name: 'Kills',
        key: 'kills_sg556',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_sg556: {
        name: 'Kills',
        key: 'shots_sg556',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_sg556: {
        name: 'Kills',
        key: 'hits_sg556',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_scar20: {
        name: 'Kills',
        key: 'hits_scar20',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_scar20: {
        name: 'Kills',
        key: 'kills_scar20',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_scar20: {
        name: 'Kills',
        key: 'shots_scar20',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_ssg08: {
        name: 'Kills',
        key: 'shots_ssg08',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_ssg08: {
        name: 'Kills',
        key: 'hits_ssg08',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_ssg08: {
        name: 'Kills',
        key: 'kills_ssg08',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_mp7: {
        name: 'Kills',
        key: 'shots_mp7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_mp7: {
        name: 'Kills',
        key: 'hits_mp7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_mp7: {
        name: 'Kills',
        key: 'kills_mp7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_mp9: {
        name: 'Kills',
        key: 'kills_mp9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_mp9: {
        name: 'Kills',
        key: 'shots_mp9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_mp9: {
        name: 'Kills',
        key: 'hits_mp9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_nova: {
        name: 'Kills',
        key: 'hits_nova',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_nova: {
        name: 'Kills',
        key: 'kills_nova',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_nova: {
        name: 'Kills',
        key: 'shots_nova',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_negev: {
        name: 'Kills',
        key: 'hits_negev',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_negev: {
        name: 'Kills',
        key: 'kills_negev',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_negev: {
        name: 'Kills',
        key: 'shots_negev',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_sawedoff: {
        name: 'Kills',
        key: 'shots_sawedoff',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_sawedoff: {
        name: 'Kills',
        key: 'hits_sawedoff',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_sawedoff: {
        name: 'Kills',
        key: 'kills_sawedoff',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_bizon: {
        name: 'Kills',
        key: 'shots_bizon',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_bizon: {
        name: 'Kills',
        key: 'hits_bizon',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_bizon: {
        name: 'Kills',
        key: 'kills_bizon',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_tec9: {
        name: 'Kills',
        key: 'kills_tec9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_tec9: {
        name: 'Kills',
        key: 'shots_tec9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_tec9: {
        name: 'Kills',
        key: 'hits_tec9',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_mag7: {
        name: 'Kills',
        key: 'shots_mag7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_mag7: {
        name: 'Kills',
        key: 'hits_mag7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_mag7: {
        name: 'Kills',
        key: 'kills_mag7',
        category: 'Stats',
        transform: (value) => value,
    },
    total_gun_game_contribution_score: {
        name: 'Kills',
        key: 'gun_game_contribution_score',
        category: 'Stats',
        transform: (value) => value,
    },
    last_match_gg_contribution_score: {
        name: 'Kills',
        key: 'last_match_gg_contribution_score',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_m4a1: {
        name: 'Kills',
        key: 'kills_m4a1',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_galilar: {
        name: 'Kills',
        key: 'kills_galilar',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_molotov: {
        name: 'Kills',
        key: 'kills_molotov',
        category: 'Stats',
        transform: (value) => value,
    },
    total_kills_taser: {
        name: 'Kills',
        key: 'kills_taser',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_m4a1: {
        name: 'Kills',
        key: 'shots_m4a1',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_galilar: {
        name: 'Kills',
        key: 'shots_galilar',
        category: 'Stats',
        transform: (value) => value,
    },
    total_shots_taser: {
        name: 'Kills',
        key: 'shots_taser',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_m4a1: {
        name: 'Kills',
        key: 'hits_m4a1',
        category: 'Stats',
        transform: (value) => value,
    },
    total_hits_galilar: {
        name: 'Kills',
        key: 'hits_galilar',
        category: 'Stats',
        transform: (value) => value,
    },
    total_rounds_map_ar_monastery: {
        name: 'Kills',
        key: 'rounds_map_ar_monastery',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_won_train: {
        name: 'Kills',
        key: 'matches_won_train',
        category: 'Stats',
        transform: (value) => value,
    },
    total_rounds_map_de_vertigo: {
        name: 'Kills',
        key: 'rounds_map_de_vertigo',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_won_baggage: {
        name: 'Kills',
        key: 'matches_won_baggage',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_won_lake: {
        name: 'Kills',
        key: 'matches_won_lake',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_won_stmarc: {
        name: 'Kills',
        key: 'matches_won_stmarc',
        category: 'Stats',
        transform: (value) => value,
    },
    total_matches_won_safehouse: {
        name: 'Kills',
        key: 'matches_won_safehouse',
        category: 'Stats',
        transform: (value) => value,
    },
    steam_stat_xpearnedgames: {
        name: 'Kills',
        key: 'steam_stat_xpearnedgames',
        category: 'Stats',
        transform: (value) => value,
    },
    steam_stat_matchwinscomp: {
        name: 'Kills',
        key: 'steam_stat_matchwinscomp',
        category: 'Stats',
        transform: (value) => value,
    },
}