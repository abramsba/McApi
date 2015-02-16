
--
-- Procedure for getting the details of the player
--

-- Stats_players = head
-- Stats_player  = data

delimiter //

drop procedure if exists getPlayer;
create procedure getPlayer ( pid integer )
begin
  select head.player_id,
         head.name,
         head.firstjoin,
         sum(data.playtime)     as playtime,
         sum(data.arrows)       as arrows,
         sum(data.xpgained)     as xp,
         sum(data.joins)        as joins,
         sum(data.fishcatched)  as fish,
         sum(data.damagetaken)  as damage,
         sum(data.toolsbroken)  as broken,
         sum(data.eggsthrown)   as eggs,
         sum(data.itemscrafted) as crafted,
         sum(data.omnomnom)     as ate,
         sum(data.onfire)       as onfire,
         sum(data.wordssaid)    as words,
         sum(data.commandsdone) as commands,
         sum(data.teleports)    as teleports,
         sum(data.itempickups)  as pickups,
         sum(data.bedenter)     as bedenter,
         sum(data.bucketfill)   as bucketfill,
         sum(data.bucketempty)  as bucketempty,
         sum(data.worldchange)  as worldchange,
         sum(data.itemdrops)    as drops,
         sum(data.shear)        as shear,
         sum(data.money)        as money,
         sum(data.trades)       as trades
    from Stats_players      as head
    inner join Stats_player as data
    on head.player_id = data.player_id
    where head.player_id = pid and
          snapshot_name = "main_snapshot";
end//

delimiter ;

