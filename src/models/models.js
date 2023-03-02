const { DataTypes } = require("sequelize")

const db = require("../utils/database")

const Todosdb = db.define("todosdb", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(40),
        allowNull: false,

    },
    description: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(60),
        allowNull: false,

    },

})


module.exports = Todosdb;