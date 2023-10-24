const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const { Airport, City } = require("./models/index");
// const db = require("./models/index");


const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use('/api', ApiRoutes);


    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        // for add get and all the functions you need to sync one time first :
        // so we can keep the track of sync by making a enviroment variable 

        // if (process.env.SYNC_DB) {

        //     db.sequelize.sync({ alter: true });
        // }


        // const aiports = await Airport.findAll({
        //     include: {
        //         model: City,
        //         where: { id: 8 }
        //     }
        // });
        //  console.log(aiports);

        // const city = await City.findOne({
        //     where: {
        //         id: 9
        //     }
        // });
        // const aiport = await city.getAirports();
        // console.log(aiport);
        // const newair = await Airport.findOne({
        //     where: {
        //         id: 6
        //     }
        // });

        // await city.addAirport(newair);
        // await city.addAirport({
        //     name: "Jindal Airport"
        // });
    });
};

setUpAndStartServer();