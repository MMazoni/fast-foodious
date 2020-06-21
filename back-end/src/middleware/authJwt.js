const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const User = require('../models/User');


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.user_id = decoded.id;
    next();
  });
};

isMarket = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Mercado") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isCourier = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Coletor") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

isMarketOrCourier = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Market or Courier Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isMarket: isMarket,
  isCourier: isCourier,
  isMarketOrCourier: isMarketOrCourier
};
module.exports = authJwt;