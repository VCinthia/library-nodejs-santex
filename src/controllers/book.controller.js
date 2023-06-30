const {bookService} = require('../services')

const createBookController = (req, res) => {   
    try {
        const newBook = bookService.createBookService(req.params.bookId, req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({action: 'createBookController', error: err.message});
    }
};

const getBookController = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, name: 'Lord of the rings'})
};

const putBookController = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, ...req.body});
};

module.exports =  { createBookController, getBookController, putBookController}