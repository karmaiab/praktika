const db = require('../config_db')
const {Sequelize} = require('sequelize')
const Company = require('../models/company')

const Places = db.define("places", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    CompanyId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Company,
            key: 'id'
        }
    },
    specialty: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateStart: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateStop:{
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["id", "CompanyId"]
        }
    ]
});

module.exports = Places;