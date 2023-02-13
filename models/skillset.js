const db = require('../config_db')
const {Sequelize} = require('sequelize')
const Places = require('../models/places')

const Skillset = db.define("skillset", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    PlacesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Places,
            key: 'id'
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["id", "PlacesId"]
        }
    ]
});

module.exports = Skillset;