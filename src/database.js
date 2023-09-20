import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

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
async function getUser(id){
    const [user] = await pool.query(`SELECT * FROM User WHERE IdUser = ?`, [id])
    return user[0]
}

async function createUser(Nick,Password,FirstName,LastName){
    const result = await pool.query(`INSERT INTO User (Nick,Password,FirstName,LastName) VALUES (?,?,?,?)`, [Nick,Password,FirstName,LastName])
    return result
}

const users = await getUsers()
const user = await getUser(2)

const result = await createUser('pao','123','pao','marzan');
console.log(result)
console.log(users)
