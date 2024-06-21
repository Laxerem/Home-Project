const db = require('../dataBase/db.js')

const methods = {
    "create_user": 'INSERT INTO person (user_name, user_password) values ($1, $2) RETURNING *',
    "get_all_users": 'SELECT * FROM person',
    "get_one_user": 'SELECT * FROM person WHERE id = $1'
}

async function send_request_database(res_to_client, method) {
    try {
        const request_db = methods[method];
        const response = await db.query(request_db);

        console.log(response)
    }
    catch(error) {
        console.log("ERROR SEND REQUEST!", error.message)
    }
}