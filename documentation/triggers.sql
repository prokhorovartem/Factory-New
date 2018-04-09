CREATE FUNCTION amount_of_prizes()
  RETURNS trigger
	language plpgsql
as $$
BEGIN
  UPDATE team SET amount_of_prizes = amount_of_prizes + new.winners_prize WHERE team.id = new.winner_id;
RETURN new;
END;
$$;

create trigger trig_prizes
	after insert or update
	on tournament
	for each row
	execute procedure amount_of_prizes()
;

CREATE FUNCTION favourite_weapon()
  RETURNS trigger
	language plpgsql
as $$
BEGIN
IF (
     SELECT count(weapon_id) from frag
     WHERE killer_id = new.killer_id AND weapon_id = new.weapon_id
     GROUP BY weapon_id) >
   (
     SELECT count(frag.weapon_id) FROM frag
       JOIN player ON frag.killer_id = player.id
     WHERE player.weapon_id = frag.weapon_id AND new.killer_id = player.id
     GROUP BY frag.weapon_id
   ) THEN UPDATE player SET weapon_id = new.weapon_id WHERE player.id = new.killer_id;
END IF;
RETURN new;
END;
$$;

create trigger trig_weapon
	after insert or update
	on frag
	for each row
	execute procedure favourite_weapon()
;

CREATE FUNCTION winner()
  RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
IF (NEW."points1" > new."points2" AND new."team1_id" = new."winner_id") THEN RETURN new;
  ELSE new."winner_id" = new."team2_id";
END IF;
IF (NEW."points2" > new."points1" AND new."team2_id" = new."winner_id") THEN RETURN new;
  ELSE new."winner_id" = new."team1_id";
END IF;
RETURN new;
END;
$$;

create trigger trig_winner
	before insert or update
	on match
	for each row
	execute procedure winner()
;
