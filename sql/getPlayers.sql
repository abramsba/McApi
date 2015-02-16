--
--
--
delimiter //
drop procedure if exists getPlayers;
create procedure getPlayers ( )
begin
  select player_id as id,
         name,
         firstjoin
    from Stats_players;
end//
delimiter ;

