const Pool = require('pg').Pool; //Пул для отправки запросов в БД //Файл с аддрессом Базы Данных
class DataBase { //Методы этого класса возвращают Promise
    
    constructor(database_data) {
        this.db = database_data;
    }

    new_pool() {
        const pool = new Pool(this.db)
        return pool;
    }
    
    async create_user(name, password) {
        return new Promise(async (resolve, reject) => {
            const pool =  this.new_pool();
            const response = await pool.query('INSERT INTO person (user_name, user_password) values ($1, $2) RETURNING *', 
            [name, password])

            .then(res => {
                const user = res.rows[0];
                
                console.log("CREATE USER!", user);
                pool.end();
                res.end()
                resolve(user);
            }, error => {
                console.log("CREATE ERROR!", error.message);
                pool.end();
                reject(new Error(error.message));
            })
        })
    }

    async get_user(name) {

        return new Promise(async (resolve, reject) => {
            const db = this.new_pool();
            const response = await db.query('SELECT * FROM person WHERE user_name = $1', [name])
            .then((result) => {
                if (result.rowCount != 0) {
                    const user = result.rows[0];
                    console.log("GET USER!", user);
                    db.end()

                    resolve(result.rows[0]);
                }
                else {
                    console.log("NOT FOUND!")
                    reject(new Error("NOT FOUND!"))
                }
            }, error => {
                console.log("GET USER ERROR!", error.message);
                db.end();
                reject(new Error(error.message));
            })
        })
    }
}

module.exports = DataBase;