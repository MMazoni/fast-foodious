const Role = require('../models/Role');

module.exports = {
  async index(re, res) {
    const roles = await Role.findAll();

    return res.json(roles);
  },

  async store(req, res) {
    const { name } = req.body;

    const role = await Role.create({ name });

    return res.status(201).json({ message: 'Role succesfully created.' });
  },
};