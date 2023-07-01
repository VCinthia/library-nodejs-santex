const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Book = require('./book');//cuando esté para hacer la conexion

const Library = sequelize.define('Libraries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;