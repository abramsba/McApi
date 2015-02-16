--
-- Procedure for getting the block information
--
delimiter //
drop procedure if exists getBlocks;
create procedure getBlocks ( pid integer ) 
begin
  declare done boolean default false;
  declare b_id integer;
  declare b_variant blob;
  declare sum_placed integer;
  declare sum_broken integer;
  declare b_cursor cursor for
    select distinct data.blockID,
                    data.blockData
               from Stats_players as head
               inner join Stats_block as data
               on head.player_id = data.player_id
               where head.player_id = pid and
                     snapshot_name = "main_snapshot";
  declare continue handler for not found set done = true;
  create temporary table if not exists t_block_res
    ( pid integer, 
      id integer, 
      data integer, 
      placed integer, 
      broken integer,
      primary key ( pid, id, data ),
      index ( pid, id, data ) );
  open b_cursor;
  read_loop : LOOP
    fetch b_cursor into b_id, b_variant;
    if done then 
      leave read_loop; 
    end if;
    select sum(amount)
     into sum_placed
      from Stats_block
      where blockID = b_id and
            blockData = b_variant and
            player_id = pid and
            break = false and
            snapshot_name = "main_snapshot";
    select sum(amount)
      into sum_broken
      from Stats_block
      where blockID = b_id and
            blockData = b_variant and
            player_id = pid and
            break = true and
            snapshot_name = "main_snapshot";
    if sum_placed is null then
      set sum_placed = 0;
    end if;
    if sum_broken is null then
      set sum_broken = 0;
    end if;
    insert into t_block_res values
      ( pid, b_id, b_variant, sum_placed, sum_broken );
  end loop;
  close b_cursor;
  select id, data, placed, broken from t_block_res where pid = pid;
  delete from t_block_res where pid = pid;
end//
delimiter ;

