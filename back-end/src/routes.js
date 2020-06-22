const express = require('express');
const consign = require('consign');

consign()
        .include('src/controllers')
        .into(express);

const routes = express.Router();



//User
routes.get('/users', express.src.controllers.UserController.index);
routes.get('/users/:user_id', express.src.controllers.UserController.show);
routes.post('/users/roles/:role_id', express.src.controllers.UserController.signup);
routes.post('/users/login', express.src.controllers.UserController.login);
//Role
routes.get('/roles', express.src.controllers.RoleController.index);
routes.post('/roles', express.src.controllers.RoleController.store);
//Market
routes.get('/markets', express.src.controllers.MarketController.index);
routes.get('/markets/:market_id', express.src.controllers.MarketController.show);
//Courier
routes.get('/couriers', express.src.controllers.CourierController.index);
routes.get('/couriers/:courier_id', express.src.controllers.CourierController.show);
//Order
routes.get('/orders', express.src.controllers.OrderController.index);
routes.get('/orders/user/:user_id/', express.src.controllers.OrderController.orderByMarket);
routes.get('/orders/status/:status_id', express.src.controllers.OrderController.orderByStatus);
routes.get('/orders/courier/:user_id', express.src.controllers.OrderController.ordersWithCourier);
routes.post('/orders', express.src.controllers.OrderController.store);
routes.patch('/orders/:order_id', express.src.controllers.OrderController.colectOrder);


module.exports = routes;