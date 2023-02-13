const db = require('../config_db')
const {Sequelize} = require('sequelize');

const Student = db.define("student", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    groupCode:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Student