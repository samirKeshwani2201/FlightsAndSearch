const { CityRepository } = require("../repository/index");
class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            console.log(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async createMultipleCity(data) {
        try {
            const cities = await this.cityRepository.createMultipleCity(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            const city = this.cityRepository.getAllCities({ name: filter.name });
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }



    async getAllAirports(id) {
        try {
            const data = this.cityRepository.getAllAirports(id);
            return data;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}
module.exports = CityService;