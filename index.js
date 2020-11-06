const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
var app = require('express')()

dotenv.config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("./src/routes"))

var dbConfig = {
    server: process.env.HOST,
    port: 1433,
    user: process.env.LOGIN,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionTimeout: 1000000,
    driver: "tedious",
    stream: false,
    options: {
        appName: 'ApiTeste',
        encrypt: false
    },
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

sql.connect(dbConfig).then(pool => {
    if (pool.connecting) {
        console.log("Connecting to the database...")
    }

    if (pool.connected) {
        app.listen(process.env.PORT);
        console.log('server started on port '+process.env.PORT)
    }

    return pool
}).catch(err => {
    console.log("Failed to connect to the database")
    console.log(err)
})