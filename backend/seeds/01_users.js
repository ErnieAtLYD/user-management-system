const Chance = require('chance');
const bcrypt = require('bcryptjs');
const chance = new Chance();
const DESIRED_FAKE_USERS = 3;

const createFakeUser = () => ({
  first_name: '' + chance.first(),
  last_name: '' + chance.last(),
  email: '' + chance.email(),
  avatar: '' + chance.avatar(),
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  let user;
  const salt = await bcrypt.genSalt(10);
  const fakeUsers = [];
  for (let i = 0; i < DESIRED_FAKE_USERS; i++) {
    user = createFakeUser();
    user.username = 'user0' + (i + 1);
    user.password = await bcrypt.hash('password', salt);
    fakeUsers.push(user);
  }

  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);
    });
};
