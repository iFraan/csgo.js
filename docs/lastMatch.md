
# lastMatch
Last Match Stats
> I don't know if this actually updates with the last match or _what_ steam considers to be a last match, but this was in the response so... there's that.
> 
## Usage
```js
const { steamid, personaname, avatarfull } = user.info()
/* 
    steamid: '76561198137433783',
    personaname: 'fran sin h',
    avatarfull: 'https://avatars.akamai.steamstatic.com/b5ac48b867b9ac1935fc564eaf1b43e8ac326e24_full.jpg'
*/
```
## Response
```js
lastMatch:  {
  last_match_t_wins: 7,
  last_match_ct_wins: 9,
  last_match_wins: 7,
  last_match_max_players: 4,
  last_match_kills: 3,
  last_match_deaths: 20,
  last_match_mvps: 2,
  last_match_favweapon_id: 1,
  last_match_favweapon_shots: 14,
  last_match_favweapon_hits: 5,
  last_match_favweapon_kills: 1,
  last_match_damage: 833,
  last_match_money_spent: 35850,
  last_match_dominations: 0,
  last_match_revenges: 0,
  last_match_contribution_score: 11,
  last_match_rounds: 16
}
```