const express = require('express');
const consign = require('consign');
const cors = require('cors');

var corsOptions = {
    origin: "http://localhost:8081"
  };


module.exports = () => {
    const app = express();

    app.use(cors(corsOptions));
    app.use(express.json())
    app.use(express.urlencoded({extended: true}));

    consign()
        .include('models')
        .then('controllers')
        .into(app);

    const Role = app.models.role;

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

    db.connection.sync({force: true}).then(() => {
        console.log('Ressincronização do BD');
        initial();
    });

    return app;
};

