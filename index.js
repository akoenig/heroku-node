/*
 * heroku-nodejs
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

const greetings = [
    'Servus',
    'Hello',
    'Hallo',
    'Guten Tag',
    'Hey',
    'S\'up?',
    'Moin',
    'Moin Moin'
];

app.get('/', (req, res) => {
    res.status(200).json(greetings);
});

app.listen(port, () => {
    console.log(`Application is listening on port ${port}.`);
});

