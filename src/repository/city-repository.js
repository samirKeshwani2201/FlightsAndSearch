const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ name });

            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }
    async createMultipleCity(arr) {
        try {
            const cities = await City.bulkCreate(arr);
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(
                data,
                {
                    where: {
                        id: cityId
                    }

                }
            );
            return city;
            // const city = await City.findByPk(cityId);
            // city.name = data.name;
            // await city.save();
            // return city;
        } catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const city = await City.findAll(
                    {
                        where: {
                            name: {
                                [Op.startsWith]: filter.name
                            }
                        }
                    }
                );
                return city;
            }
            const city = await City.findAll();
            return city;
        }
        catch (error) {
            console.log("Something went wrong in repository layer ");
            throw { error };
        }
    }
}
module.exports = CityRepository;