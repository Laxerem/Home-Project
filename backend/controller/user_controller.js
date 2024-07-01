const db_address = require('../app_settings.json').database
const DataBase = require('../dataBase/db.js')

const db = new DataBase(db_address);

class UserController {
    async createUser(req, res) {
        const {name, password} = req.body;

        const result = db.create_user(name, password)
        .then(result => {
            res.status(200).send("CREATE USER!");
        }, error => {
            res.status(504).send(error.message);
        })
    }

    async getUser(req, res) {
        const name = req.params.name;
        console.log(name);
        const response = db.get_user(name)
        .then((result) => {
            res.status(200).send(result);
        }, error => {
            res.status(404).send("NOT FOUND!")
        })
    }
}

module.exports = new UserController();