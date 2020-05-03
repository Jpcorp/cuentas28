const { dbToDomian } = require("../domain/mappers");
const { domianToDb } = require("../database/mappers");
class TypeEntityServices {
    constructor({ typeEntityServicesRepository }) {
        this._typeEntityServicesRepository = typeEntityServicesRepository;
    }

    async getTypeEntityServices() {
        const typeEntityServices = await this._typeEntityServicesRepository.getAll();
        return typeEntityServices;
    }

    async setTypeEntityServices(typeEntityServices) {
        typeEntityServices = domianToDb(typeEntityServices);
        const createdTypeEntityServices =  await this._typeEntityServicesRepository(typeEntityServices);
        return createdTypeEntityServices;
    }

}

module.exports = TypeEntityServices;