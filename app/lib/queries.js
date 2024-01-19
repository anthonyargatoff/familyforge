const db = require('./databaseInfo.json');
const { Pool } = require('pg');
const { user, host, database, password, port } = db.databaseConnection;

const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
});


export async function fetchContacts(){
    try {
        await pool.query('SET search_path TO "familyForge"');
        const res = await pool.query('SELECT contacts.firstname, contacts.lastname, contacts.contactid, contacts.email, contacts.phonenum FROM contacts JOIN users ON contacts.userid  = users.id WHERE users.id = 1;');
        return res.rows;
    }
    catch(e){
        console.error(e);
    }
}