--
-- Get the npc kills
--
delimiter //
drop procedure if exists getKills;
create procedure getKills( pid integer ) 
begin
  select type,
         sum(amount)
    from Stats_kill
   where player_id = pid and
         snapshot_name = "main_snapshot"
   group by type;
end//
delimiter ; 

