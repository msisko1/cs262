--
-- This file answers questions 8.1A-E, 8.2A-D
--
-- Created by: Michael Sisko
-- Date: 10/24/2020
--

-- 8.1 A:
SELECT * FROM Game ORDER BY time DESC;

-- 8.1 B:
SELECT * FROM Game
	WHERE (time >= date_trunc('week', CURRENT_TIMESTAMP - interval '1 week')
		AND time < date_trunc('week', CURRENT_TIMESTAMP));

-- 8.1 C:
SELECT * FROM Player
	WHERE name IS NOT NULL;

-- 8.1 D:
SELECT playerID FROM PlayerGame
	WHERE score > 2000;

-- 8.1 E:
SELECT * FROM Player
	WHERE emailAddress LIKE '%@gmail.%';

-- 8.2 A:
SELECT score FROM Player, PlayerGame
	WHERE PlayerGame.playerID = Player.ID
		AND Player.name = 'The King'
	ORDER BY score DESC;

-- 8.2 B:
SELECT Player.name FROM Player, Game, PlayerGame
	WHERE Game.time = '2006-06-28 13:20:00'
		AND PlayerGame.gameID = Game.ID
		AND PlayerGame.playerID = Player.ID
	ORDER BY PlayerGame.score
	DESC LIMIT 1;

-- 8.2 C:
-- Returns entries with IDs less than other same name entries.

-- 8.2 D:
-- Self joining tables could be used for hierarchical data like an employee database.