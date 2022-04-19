const db = require('../db');
const tableName = 'users';

const findAll = () => db(tableName).select();

// Use this for login
const findOne = (filters) => db(tableName).where(filters).first();

const findById = (id) => db(tableName).where({ id }).first();

const remove = (id) => db(tableName).where({ id }).del();

const update = (id, body) => {
  delete body.created_at; // not allowed to update created_at
  delete body.updated_at; // not allowed to update updated_at
  delete body.id; // not allowed to edit an ID
  return db(tableName)
    .where({ id })
    .update(body)
    .then(() => findById(id));
};

const create = (body) => {
  delete body.id; // not allowed to set an ID
  return db(tableName)
    .insert(body)
    .then((postId) => findById(postId));
};

module.exports = {
  findOne,
  findAll,
  findById,
  remove,
  update,
  create,
};
