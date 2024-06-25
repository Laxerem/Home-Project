const db = require('../dataBase/db.js')
const Pool = require('pg').Pool;

const db_data = require('../app_settings.json').database
const db = new Pool(db_data);

const response = db.query('SELECT * FROM person')

class dataBase {
    constructor(database_data) {
        this.db = database;
    }
}