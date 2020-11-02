--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author msisko1
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS GameProp;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS PlayerGame;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp
	);

CREATE TABLE GameProp (
	gameID integer REFERENCES Game(ID),
	playerID integer REFERENCES Player(ID),
	property varchar(50),
	development varchar(50),
	PRIMARY KEY (gameID, property)
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY,
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
  gameID integer REFERENCES Game(ID),
  playerID integer REFERENCES Player(ID),
  score integer,
  cash integer,
	position varchar(50) NOT NULL,
  PRIMARY KEY (gameID, playerID)
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON GameProp TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'mjs96@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

-- Individual player values
INSERT INTO PlayerGame VALUES (1, 1, 1, 0.00, 'start');
INSERT INTO PlayerGame VALUES (1, 2, 1, 0.00, 'start');
INSERT INTO PlayerGame VALUES (1, 3, 1, 2350.00, 'start');
INSERT INTO PlayerGame VALUES (2, 1, 1, 1000.00, 'start');
INSERT INTO PlayerGame VALUES (2, 2, 1, 0.00, 'start');
INSERT INTO PlayerGame VALUES (2, 3, 1, 500.00, 'start');
INSERT INTO PlayerGame VALUES (3, 2, 1, 0.00, 'start');
INSERT INTO PlayerGame VALUES (3, 3, 1, 5500.00, 'start');

-- Game property values
INSERT INTO GameProp VALUES (1, 1, 'St. James Place', 'hotel');
INSERT INTO GameProp VALUES (1, 2, 'Water Works', 'none');
INSERT INTO GameProp VALUES (1, 3, 'Ventnor Ave.', 'house');
INSERT INTO GameProp VALUES (2, 1, 'Oriental Ave.', 'hotel');
INSERT INTO GameProp VALUES (2, 2, 'Park Place', 'house');
INSERT INTO GameProp VALUES (2, 3, 'Oriental Ave.', 'none');
INSERT INTO GameProp VALUES (3, 1, 'Board Walk', 'house');
INSERT INTO GameProp VALUES (3, 2, 'St. James Place', 'none');
INSERT INTO GameProp VALUES (3, 3, 'Board Walk', 'none');
