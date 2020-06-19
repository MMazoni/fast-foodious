const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: "http://localhost:8081"
  };

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

module.exports = () => {
    const app = express();

    app.use(cors(corsOptions));

    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: true}));

    consign()
        .include('controllers')
        .into(app);

    const db = require('../models');
    const Role = db.role;

    db.sequelize.sync({force: true}).then(() => {
        console.log('Ressincronização do BD');
        initial();
    });

    return app;
};

