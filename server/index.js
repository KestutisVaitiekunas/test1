const express = require('express')
const mysql = require('mysql');




const app = express()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });





app.get('/', (req, res) => {
        res.send('Hello World!!!')
    })

    
    app.listen(3001, () => {
        console.log('Example app listening on port 3001!')
    })