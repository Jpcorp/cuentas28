module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'tipo_entidad_servicios', {
            TIPO_ENTIDAD_SERVICIOS_ID: {
                type: DataTypes.BINGINT,
                allowNull: false, 
                primaryKey: true,
                autoIncrement: true
            }, 
            NOMBRE_TIPO_ENTIDAD: {
                type: DataTypes.STRING,
                allowNull: false
            },
            FECHA_INGRESO: {
                type: DataTypes.DATE
            }
        },
            {
                tableName: "tipo_entidad_servicios",
                timestamps: false,
                defaultValue: NOW
            }
    );
};