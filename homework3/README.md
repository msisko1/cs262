
# Homework 3 - Questions

#### A.) What are the (active) URLs for your data service?
https://pacific-tundra-20696.herokuapp.com/
https://pacific-tundra-20696.herokuapp.com/players
https://pacific-tundra-20696.herokuapp.com/players/:id
https://pacific-tundra-20696.herokuapp.com/scores/
router.put("/players/:id", updatePlayer);
router.post('/players', createPlayer);
router.delete('/players/:id', deletePlayer);

#### B.) Which of these endpoints are idempotent? nullipotent?
https://pacific-tundra-20696.herokuapp.com/ 			// nullipotent
https://pacific-tundra-20696.herokuapp.com/players 		// nullipotent
https://pacific-tundra-20696.herokuapp.com/players/:id 	// nullipotent
https://pacific-tundra-20696.herokuapp.com/scores/ 		// nullipotent
router.put("/players/:id", updatePlayer); 				// idempotent
router.post('/players', createPlayer); 					// nullipotent
router.delete('/players/:id', deletePlayer); 			// idempotent

#### C.) Is the service RESTful?
It is RESTful because it has exposed/structured URLs, holds data as a json object, and it uses HTTPS.

#### D.) Is there any evidence in your implementation of an impedance mismatch?
I do not think there is an impedance mismatch.
