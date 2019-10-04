const Sequelize = require('sequelize')
const db = require('../../config/db-connection')

const Level = db.sequelize.define(
    'polyfit_level',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true

        },
        id_exercises: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_diet: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_history: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
)

module.exports = Level