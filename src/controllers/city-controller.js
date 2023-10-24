
const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to created city",
            err: error
        });

    }
};

const multipleCreate = async (req, res) => {
    try {

        const cities = await cityService.createMultipleCity(req.body.arr);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Successfully created multiple city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create multiple city",
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get city",
            err: error
        });
    }
};
 
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all city",
            err: {}

        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all  the city",
            err: error
        });
    }
};

module.exports = {
    create, update, get, destroy, getAll, multipleCreate
};