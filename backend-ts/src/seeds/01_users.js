const Chance = require('chance');
const chance = new Chance();
const DESIRED_FAKE_USERS = 10;

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
  const fakeUsers = [];
  for (let i = 0; i < DESIRED_FAKE_USERS; i++) {
    fakeUsers.push(createFakeUser());
  }

  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);
    });
};
