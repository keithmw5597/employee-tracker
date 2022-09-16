// import dbConnection from './db/connection';
const dbConnection = require('./db/connection');

// import prompt from './index';
const prompt = require('./index');
import express from 'express';
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

dbConnection.connect(err => {
    if(err) throw err;
    console.log('You are connected to the database');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        prompt();
    })
});