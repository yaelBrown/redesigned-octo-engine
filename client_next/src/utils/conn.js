import CONSTANTS from "./constants"
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: CONSTANTS.DB_HOST,
  user: CONSTANTS.DB_USER,
  password: CONSTANTS.DB_PASSWORD,
  database: CONSTANTS.DB_DATABASE
})

export default connection