const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id,
        });
      }
      res.send(user);
    })
    .catch((err) =>
      res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.id,
      })
    );
};

exports.createUser = (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;

  User.update(id, req.body)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + id,
        });
      }
      res.status(204).send(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: 'Error updating user with id ' + id,
      });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.remove(id)
    .then((user) => {
      res.send({ message: 'User deleted successfully!' });
    })
    .catch((err) => {
      return res.status(500).send({
        message: 'Could not delete user with id ' + id,
      });
    });
};
