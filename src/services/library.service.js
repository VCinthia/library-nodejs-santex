const { libraryProvider } = require('../providers')

const createLibraryService = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrariesService = async () => {
    const libraries = await libraryProvider.getLibraries();
    if (libraries) {
        console.log(libraries);
    }
    return libraries;
};

const getByIDLibraryService = async (libraryId) => {
    const library = await libraryProvider.getByIDLibrary(libraryId);
    if (library) {
        console.log(library.name);
    }
    return library;
};

const getLibraryByCriteriaService = async (option) => {
    const library = await libraryProvider.getLibraryByCriteria(option);
    if (library) {
        console.log(library.name);
    }
    return library;
};

//ver si anda
const editLibraryService = async (libraryId, library) => {
    return await libraryProvider.editLibrary(libraryId, library);
};

//ver si anda
const deleteLibraryService = async (userId) => {
    return await libraryProvider.deleteLibrary(userId);
};


module.exports = { createLibraryService, getLibrariesService, getByIDLibraryService, getLibraryByCriteriaService, editLibraryService, deleteLibraryService };