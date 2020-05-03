const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StarUp = require("./startup");
const Server = require("./server");

const { TypeEntityServicesController } = require("../presentation/controllers");
const Routes = require("../presentation/routers");
const typeEntityServiciesRoutes = require("./routers/typesEntityServicies.routes");
const { TypeEntityServices } = require("../services");
const { TypeEntityServicesRepository } = require("../database/repositories")

const config = require("../config/enviroments");

const db = require("../database/entities");

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
    config: asValue(config),
    db: asValue(db).singleton()
})
.register({
    typeEntityServiciesRoutes: asFunction(typeEntityServiciesRoutes).singleton()
})
.register({
    typeEntityServices: asClass(TypeEntityServices).singleton()
})
.register({
    typeEntityServicesRepository: asClass(TypeEntityServicesRepository).singleton()
})

module.exports = container;