const db = require('../dataBase/db.js')

class UserController {
    async createUser(req, res) {
        const {name, password} = req.body;
        console.log(req.body)
        const person = await db.query('INSERT INTO person (user_name, user_password) values ($1, $2) RETURNING *', [name, password]);
        res.json(person);
    }
    async getUsers(req, res) {
        const persons = await db.query('SELECT * FROM person');
        res.json(persons.rows)
    }
    async getOneUser(req, res) {
        
    }
}

module.exports = new UserController();