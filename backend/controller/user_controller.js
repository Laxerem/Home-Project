const db = require('../dataBase/db.js')

class UserController {
    async createUser(req, res) {
        const {name, password} = req.body;
        console.log(req.body)
        const person = await db.query('INSERT INTO person (user_name, user_password) values ($1, $2) RETURNING *', [name, password]);
        res.json(person);
    }
    async getUsers(req, res) {
        try {
            const persons = await db.query('SELECT * FROM person');
            if (persons.rowCount != 0) {
                res.json(persons.rows)
            } 
            else {
                res.status(404).send("Ничего нет, лол")
            }
        }
        catch(error) {
            console.log("ERROR!", error.message);
            res.status(500).send(error.message);
        }
    }
    async getOneUser(req, res) {
        const {id} = req.body;
        try {
            const person = await db.query('SELECT * FROM person WHERE id = $1', [id]);
            if (person.rowCount == 0) {
                res.status(404).send("Not Found")
            }
            else {
               res.status(302).json(person.rows[0]);
            }
        }
        catch(error) {
            console.log("ERROR!", error.message);
        }
    }
    async add_new_sensor(req, res) {
        
    }
}

module.exports = new UserController();