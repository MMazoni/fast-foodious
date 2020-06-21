const User = require('../models/User');
const Role = require('../models/Role');
const Market = require('../models/Market');
const Courier = require('../models/Courier');
const config = require("../config/auth");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  async index(req, res) {
    const users = await User.findAll({
      include: { association: 'role' }
    });

    return res.json(users);
  },

  async show(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'role' }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  },

  async signup(req, res) {
    const { role_id } = req.params;
    const { name, email, password } = req.body;

    const role = await Role.findByPk(role_id);

    const user = await User.create({
      role_id: role_id,
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8)
    });

    if (!role) {
      return res.status(404).json({ error: 'Role not found.' });
    }
    if (role_id == 1) {
      Market.create({
        user_id: user.id
      });
    }
    if (role_id == 2) {
      Courier.create({ user_id: user.id });
    }

    return res.status(201).json({ message: 'User succesfully created.' });
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }
    const passwordIsValid = bcrypt.compareSync(
      password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).json({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });



    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      accessToken: token
    });
  }
};