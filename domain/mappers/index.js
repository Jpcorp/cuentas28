const { typeEntityServices } = require("../typeEntityServices.domain");

module.exports = {

    domainToEntity(typeEntityServices) {
        const { id, name, createAt } = typeEntityServices
        return new TypeEntityServicies({ id, name, createAt });
    }
};