const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareDate } = require("../utils/helper");

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareDate(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time should be greater than Departure time" };
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer ");
            throw { error };
        }
    }
    async getAllFlight(filter) {
        try {
            const flights = await this.flightRepository.getAllFlight(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer ");
            throw { error };
        }
    }
    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer ");
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await this.flightRepository.updatFlight(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer ");
            throw { error };
        }
    }
    
}

module.exports = FlightService;

/*
    in the data we will get the 
    flightNumber
    airplaneId
    departureAirportId
    arrivalAirportId
    arrivalTime
    departureTime
    price
    totalSeats->will be received from the airplan and not from user 
*/