const { portalSuspended} = require('pg-protocol/dist/messages')
const {Sequelize, HostNotFoundError} = require('sequelize')


const db = new Sequelize({
    
    database : "todosdb",
    port : "5432",
    host : "localhost",
    username : "postgres",
    password : "root",
    dialect : "postgres"

})

module.exports = db;

