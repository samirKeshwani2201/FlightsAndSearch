const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();


router.post('/city', CityController.create);
router.post('/multipleCity', CityController.multipleCreate);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/citiy/:cityId/airports", CityController.getAllAirports);


router.post('/airport', AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);



router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);

module.exports = router;

