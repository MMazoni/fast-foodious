const express = require('express');

const cors = require('cors');
const routes = require('../routes');

var corsOptions = {
    origin: "http://localhost:8081"
};


module.exports = () => {
    const app = express();

    app.use(cors(corsOptions));
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);

    return app;
};

