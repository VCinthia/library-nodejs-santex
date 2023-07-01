const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //conectar por sequelize library con book
    // library: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
});

module.exports = Book;