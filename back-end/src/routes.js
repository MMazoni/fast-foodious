const express = require('express');
const UserController = require('./controllers/UserController');
const MarketController = require('./controllers/MarketController');
const RoleController = require('./controllers/RoleController');
const CourierController = require('./controllers/CourierController');


const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users/roles/:role_id', UserController.store);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);

routes.get('/markets', MarketController.index);
routes.get('/users/:user_id/market', MarketController.store);

routes.get('/couriers', MarketController.index);
routes.get('/users/:user_id/courier', MarketController.store);

module.exports = routes;