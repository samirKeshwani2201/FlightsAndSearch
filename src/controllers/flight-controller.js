const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        let flightData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };
        const flight = await flightService.createFlight(flightData);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create flight",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlight(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the flight/s"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetchs the flight",
            err: error
        });
    }
};

module.exports = {
    create, getAll
};