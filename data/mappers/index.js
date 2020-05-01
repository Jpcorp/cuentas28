module.exports = {

    entityToDb(typeEntityServicies) {
        const TIPO_ENTIDAD_SERVICIOS_ID = typeEntityServicies.id;
        const NOMBRE_TIPO_ENTIDAD = typeEntityServicies.name;
        const FECHA_INGRESO = typeEntityServicies.createAt
        return { TIPO_ENTIDAD_SERVICIOS_ID, NOMBRE_TIPO_ENTIDAD, FECHA_INGRESO };
    }

}