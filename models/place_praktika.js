const db = require('../config_db')
const {Sequelize} = require('sequelize')
const Student = require('../models/student')
const Places = require('../models/places')

const PlacePraktika = db.define("placePraktika", {
    StudentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        }
    },
    PlacesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Places,
            key: 'id'
        }
    }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['StudentId', 'PlacesId']
        }
    ]
});

module.exports = PlacePraktika;