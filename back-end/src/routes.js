const express = require('express');
const UserController = require('./controllers/UserController');
const MarketController = require('./controllers/MarketController');
const RoleController = require('./controllers/RoleController');
const CourierController = require('./controllers/CourierController');
const OrderController = require('./controllers/OrderController');


const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users/roles/:role_id', UserController.signup);
routes.post('/users/login', UserController.login);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);

routes.get('/markets', MarketController.index);

routes.get('/couriers', CourierController.index);

routes.get('/orders', OrderController.index);
routes.get('/orders/market/:market_id', OrderController.show);
routes.post('/orders', OrderController.store);
routes.put('/orders/:order_id', OrderController.colectOrder);

module.exports = routes;