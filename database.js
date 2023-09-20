import mysql from 'mysql2';
import 'dotenv/config'

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}).promise()

async function getUsers(){
    const [users] = await pool.query("SELECT * FROM User")
    return users
}

const users = await getUsers()
console.log(users)