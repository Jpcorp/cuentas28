const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression")

module.exports = function ({ typeEntityServiciesRoutes }) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
    
    apiRoute.use("/typesEntityServicies", typeEntityServiciesRoutes)
    router.use("/api", apiRoute);
    return router;
}