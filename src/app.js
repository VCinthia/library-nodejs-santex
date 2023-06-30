const express = require('express');
const { bookRouter, userRouter, authRouter} = require('./routes');
const loggingMdw = require('./middleware/logging');
const { initializeDB } = require('./config/dbConfig')
const {userModel} = require('./models');

const PORT = 8090;
const bookFile = 'book.json';
//instanciamos la aplicacion trayendo el framework
const app = express();
//Application Middlewarees
app.use(express.json());

app.use(loggingMdw);

app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/login', authRouter);

// app.get('/user', (req, res, next) => {
//     console.log('User:', req.user);
//     res.send('<h1>Hola Mundo desde GET.</h1>')
// });

const errorHandler = (err, req, res, next) => {
    if (err.message === 'File Exists') {
        res.status(500);
        res.json({message: `File '${bookFile}' exists`})
    } else {
        res.status(500);
        res.json({message: err.nessage});
    }
};

app.use(errorHandler);

app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Server running in ${PORT}.`);
});

