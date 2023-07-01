const { libraryService } = require('../services')

const createLibraryController = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibraryService(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: 'createLibraryController', error: err.message });
    }
};

const getLibrariesController = async (req, res) => {
    try {
        const libraries = await libraryService.getLibrariesService();
        if (!libraries) {
            res.status(404).json({ action: 'getLibrariesController', error: "Libraries Not Found" });
        } else {
            res.json(libraries);
        }
    } catch (err) {
        res.status(500).json({ action: 'getLibrariesController', error: err.message });
    }

};

const getByIDLibraryController = async (req, res) => {
    try {
        const library = await libraryService.getByIDLibraryService(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: 'getByIDLibraryController', error: "Library Not Found" });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: 'getByIDLibraryController', error: err.message });
    }

};

//arreglar
const getLibraryByCriteriaController = async (req, res) => {
    try {
        const library = await libraryService.getLibraryByCriteriaService(req.query.option);//req.params.options?
        if (!library) {
            res.status(404).json({ action: 'getLibraryByCriteriaController', error: "Library Not Found" });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: 'getLibraryByCriteriaController', error: err.message });
    }

};

//ver si anda
const editLibraryController = async (req, res) => {
    try {
        const library = await libraryService.editLibraryService(req.params.libraryId, req.body);//req.library?
        if (!library) {
            res.status(404).json({ action: 'editLibraryController', error: "Library Not Found" });
        }
        res.json(library);
    } catch (err) {
        res.status(500).json({ action: 'editLibraryController', error: err.message });
    }
};

//ver si anda
const deleteLibraryController = async (req, res) => {
    try {
        const library = await libraryService.deleteLibraryService(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: 'deleteLibraryController', error: "Library Not Found" });
        }
        res.json(library);
    } catch (err) {
        res.status(500).json({ action: 'deleteLibraryController', error: err.message });
    }
};

module.exports = { createLibraryController, getLibrariesController, getByIDLibraryController, getLibraryByCriteriaController, editLibraryController, deleteLibraryController };