const { Op } = require('sequelize');
const { Library } = require('../models');


const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error('~ Error when creating Library: ', err);
        throw err;
    }
};



const getLibraries = async () => {
    try {
        const libraries = await Library.findAll({ include: { all: true } });//ver que si anda con el include all
        return libraries;
    } catch (err) {
        console.error(`~ Error when fetching Libraries: `, err);//ver como queda el agregado ' ID: ${libraryId} '
        throw err;
    }
};

const getByIDLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, { include: { all: true } });//ver que si anda con el include all
        return library;
    } catch (err) {
        console.error(`~ Error when fetching Library by ID: ${libraryId} `, err);//ver como queda el agregado ' ID: ${libraryId} '
        throw err;
    }
};

const getLibraryByCriteria = async (options) => {
    try {
        const libraries = await Library.findAll({
            where: {
                [Op.or]: [
                    { name: options.name },
                    { location: options.location }
                ],
            },
        });
        return libraries;
    } catch (err) {
        console.error(`~ Error when fetching Library by criteria: ${options}: `, err);// ver si lo paso a toString
        throw err;
    }
};

//ver si funciona
const editLibrary = async (libraryId, library) => {
    try {
        let foundLibrary = await Library.findByPk(libraryId, { include: { all: true } });//ver que si anda con el include all
        if(foundLibrary){
            await foundLibrary.update(library);
        return foundLibrary;
        }
        return null;
    } catch (err) {
        console.error(`~ Error when fetching Library by ID: ${libraryId} `, err);//ver como queda el agregado ' ID: ${libraryId} '
        throw err;
    }
};
//ver si funciona
const deleteLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, { include: { all: true } });//ver que si anda con el include all
        if(library){
            await library.destroy(libraryId);
        return library;
        }
        return null;
    } catch (err) {
        console.error(`~ Error when fetching Library by ID: ${libraryId} `, err);//ver como queda el agregado ' ID: ${libraryId} '
        throw err;
    }
};

module.exports = { createLibrary, getLibraries, getByIDLibrary, getLibraryByCriteria, editLibrary, deleteLibrary};