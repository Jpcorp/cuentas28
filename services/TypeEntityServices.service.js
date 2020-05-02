const { domainToEntity }= require("../domain/mappers");
class TypeEntityServices {
    constructor({ typeEntityServicesRepository }) {
        this._typeEntityServicesRepository = typeEntityServicesRepository;
    }

    async getTypeEntityServices() {
        const typeEntityServices = await this._typeEntityServicesRepository.getAll();
        return typeEntityServices;
    }

    async setTypeEntityServices(typeEntityServices) {
        typeEntityServices = domainToEntity(typeEntityServices);
        const createdTypeEntityServices =  await this._typeEntityServicesRepository(typeEntityServices);
        return createdTypeEntityServices;
    }

}

module.exports = TypeEntityServices;