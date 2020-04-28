const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StarUp = require("./startup");
const Server = require("./server");

const TypeEntityServicesController = require("../presentation/controllers/typeEntityServices.controller");
const Routes = require("../presentation/routers");
const TypeEntityServiciesRoutes = require("./routers/typesEntityServicies.routes");

const config = require("../config/enviroments")

const container = createContainer();

container.register({
    app: asClass(StarUp).singleton(), 
    server : asClass(Server).singleton()
})
.register({ 
    typeEntityServicesController: asClass(TypeEntityServicesController).singleton() 
})
.register({
    router: asFunction(Routes).singleton()
})
.register({ 
    config: asValue(config) 
})
.register({
    typeEntityServiciesRoutes: asFunction(TypeEntityServiciesRoutes).singleton()
})

module.exports = container;