const User = require('../models/User');
const Role = require('../models/Role');

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

    return res.status(200).json(user);
  },

  async store(req, res) {
    const { role_id } = req.params;
    const { name, email, password } = req.body;

    console.log(req.body);
    const role = await Role.findByPk(role_id);

    if (!role) {
      return res.status(400).json({ error: 'Role not found.' });
    }

    const user = await User.create({
      role_id,
      name,
      email,
      password
    });

    return res.status(201).json({ message: 'User succesfully created.' });
  },
};