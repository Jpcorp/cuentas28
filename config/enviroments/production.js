module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "cuentas",
        password: process.env.DB_PASSWORD,
        database: "cuentas_prod",
        host: "localhost",
        dialect: "mysql"

    }
};