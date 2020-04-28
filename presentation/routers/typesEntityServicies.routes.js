const { Router } = require("express");

module.exports = function({ typeEntityServicesController }) {
    const router = Router();

    router.get("/", typeEntityServicesController.sayHello);

    return router;
}