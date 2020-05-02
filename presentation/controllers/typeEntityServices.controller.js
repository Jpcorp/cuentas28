class TypeEntityServicesController {
    constructor({ typeEntityServices }) {
        this._typeEntityServices = typeEntityServices;
    }

    sayHello(req, res) {
        return res.send({ message: "hello! "});
    }

    async setTypeEntityServices(req, res) {
        const body = req.body;
        return await this._typeEntityServices.setTypeEntityServices(body);
    }


}
 
module.exports = TypeEntityServicesController;