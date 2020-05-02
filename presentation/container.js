const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StarUp = require("./startup");
const Server = require("./server");

const { typeEntityServicesController } = require("../presentation/controllers");
const Routes = require("../presentation/routers");
const typeEntityServiciesRoutes = require("./routers/typesEntityServicies.routes");
const { typeEntityServices }= require("../services")

const config = require("../config/enviroments")

const container = createContainer();

container.register({
    app: asClass(StarUp).singleton(), 
    server : asClass(Server).singleton()
})
.register({ 
    typeEntityServicesController: asClass(typeEntityServicesController).singleton() 
})
.register({
    router: asFunction(Routes).singleton()
})
.register({ 
    config: asValue(config) 
})
.register({
    typeEntityServiciesRoutes: asFunction(typeEntityServiciesRoutes).singleton()
})
.register({
    TypeEntityServices: asClass(typeEntityServices).singleton()
})

module.exports = container;