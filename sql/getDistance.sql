--
-- Get the current distances
--
delimiter //
drop procedure if exists getDistance;
create procedure getDistance( pid integer )
begin
  select Stats_move.type as type, 
         move_types.name as name, 
         sum(Stats_move.distance) as distance
    from Stats_move
   inner join move_types on Stats_move.type = move_types.type
   where snapshot_name = "main_snapshot" and
         player_id = pid
   group by Stats_move.type;
end//
delimiter ;

