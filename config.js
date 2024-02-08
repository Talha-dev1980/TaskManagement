const Sequelize = require('sequelize');
let db={}
const sequelize = new Sequelize('Day3-1', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

db.sequelize=sequelize
db.Sequelize=Sequelize
module.exports = db;
