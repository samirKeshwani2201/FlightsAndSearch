const { Airport } = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }


    // async createAirport({ name, address, cityId }) {
    //     try {
    //         const airport = await Airport.create({ name, address, cityId });
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer ");
    //         throw { error };
    //     }
    // }

    // async deleteAirport(airportId) {
    //     try {
    //         await Airport.destroy({
    //             where: {
    //                 id: airportId
    //             }
    //         });
    //         return true;
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer ");
    //         throw { error };
    //     }
    // }

    // async getAirport(airportId) {
    //     try {
    //         const airport = await Airport.findByPk(airportId);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer ");
    //         throw { error };
    //     }
    // }

    // async updateAirport(id, body) {
    //     try {
    //         const response = await Airport.update(body,
    //             {
    //                 where: {
    //                     id: id
    //                 }
    //             });
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer ");
    //         throw { error };
    //     }
    // }

}
module.exports = AirportRepository;