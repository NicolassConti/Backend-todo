const express = require('express');
const db = require('./utils/database');
const todoroutes = require('./routes/todos.routes')
const Todosdb = require('./models/models');

const app = express();

app.use(express.json())

app.use(todoroutes)


db.authenticate()
    .then(() => {
        console.log("Database Connnected");
    })
    .catch((error) => {
        console.log(error);
    })

db.sync()
    .then(() => {
        console.log("Database Syncronized");
    })
    .catch((error) => {
        console.log(error);
    })

app.get("/", (req, res) => {
    res.send("Hello my DB")
})



app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
