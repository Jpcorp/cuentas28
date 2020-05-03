const { typeEntityServices } = require("../typeEntityServices.domain");

module.exports = {

    dbToDomian(typeEntityServices) {
        const { id, name, createAt } = typeEntityServices
        return new TypeEntityServicies({ id, name, createAt });
    }
};