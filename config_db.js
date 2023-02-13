const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('praktika', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize