--
-- Get the deaths 
--
delimiter //
drop procedure if exists getDeaths;
create procedure getDeaths( pid integer )
begin
  select cause, sum(amount)
    from Stats_death
   where player_id = pid and
         snapshot_name = "main_snapshot"
   group by cause;
end//
delimiter ;

