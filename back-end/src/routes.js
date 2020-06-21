const express = require('express');
const UserController = require('./controllers/UserController');
const MarketController = require('./controllers/MarketController');
const RoleController = require('./controllers/RoleController');
const CourierController = require('./controllers/CourierController');
const OrderController = require('./controllers/OrderController');


const routes = express.Router();

//User
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users/roles/:role_id', UserController.signup);
routes.post('/users/login', UserController.login);
//Role
routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);
//Market
routes.get('/markets', MarketController.index);
routes.get('/markets/:market_id', MarketController.show);
//Courier
routes.get('/couriers', CourierController.index);
routes.get('/couriers/:courier_id', CourierController.show);
//Order
routes.get('/orders', OrderController.index);
routes.get('/orders/market/:market_id', OrderController.orderByMarket);
routes.get('/orders/status/:status_id', OrderController.orderByStatus);
routes.post('/orders', OrderController.store);
routes.patch('/orders/:order_id', OrderController.colectOrder);

module.exports = routes;