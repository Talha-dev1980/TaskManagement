const { DataTypes } = require('sequelize');
const db = require('../config');

const Task =db.sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false 
});

module.exports = Task;
