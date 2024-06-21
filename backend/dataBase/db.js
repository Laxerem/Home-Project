const Pool = require ('pg').Pool // Объект для отправки запросов в БД
const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "home_users"
})

module.exports = pool;