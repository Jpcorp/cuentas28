const { attributes } = require("structure");

const TypeEntityServicies = attributes({ 
    id: {
        type: BigInt
    },
    name: {
        type: String, 
        required: true
    }, 
    createAt: {
        type: Date
    }
})(class TypeEntityServicies {

    getNameWithId() {
        return TypeEntityServicies.name + " " + TypeEntityServicies.id;
    }

});

module.exports = TypeEntityServicies;