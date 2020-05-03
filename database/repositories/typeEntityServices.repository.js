class TypeEntityServicesRepository {
    constructor({db}) {
        this._db = db;
    }

    findAll() {
        return this._db.tipo_entidad_servicios.findAll();
    }

    create() {
        return this._db.tipo_entidad_servicios.create();
    }

    findById(id) {
        throw new Error("not implement yet");
    }

}
module.exports = TypeEntityServicesRepository;