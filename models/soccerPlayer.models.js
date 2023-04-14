const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const SoccerPlayer = db.define('soccerPlayers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    status: {
        type: DataTypes.ENUM('active' , 'disabled'),
        allowNull: false,
        defaultValue:'active'
    }
});

module.exports = SoccerPlayer;