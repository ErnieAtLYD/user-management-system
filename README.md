# Simple User Management System

A simple user management system based on concepts taught at BST.

- Frontend: axios, React: Create React App, React Router
- Backend: Node, MySQL, ExpressJS, knex

NOTE: Using [PicoCSS](https://picocss.com/), a minimal CSS framework for semantic HTML

## Installation instructions

- `npm install`
- create DB on MySQL
  - `CREATE DATABASE user_management_system;`
- edit `knexfile.js` with local DB user, password, and DB name
- `cd backend`
  - `cp .env.sample .env`
    - Customize your `JWT_SECRET` value
  - `npm install`
  - `npm run db:migrate`
  - `npm run db:seed`
    - This will create three sample users, `user01`, `user02`, `user03`, with the password of `password`. This is for learning purposes so don't put this on production, obviously.
- `cd frontend`
  - `cp .env.sample .env` and edit as needed
  - `npm install`

## DB Schema (`user_management_system`)

### users

| name         | type       | nullable | notes               |
| ------------ | ---------- | -------- | ------------------- |
| id           | int()      | `false`  |                     |
| username     | string     | `false`  |                     |
| password     | string     | `false`  | salted using bcrypt |
| first_name   | string     | `true`   |                     |
| last_name    | string     | `true`   |                     |
| email        | string     | `true`   |                     |
| avatar       | string     | `true`   |                     |
| last_created | datetime() |          |                     |
| last_updated | datetime() |          |                     |

## API Endpoints

- GET `/api/v1/users/login`
- GET: `/api/v1/users/current` (auth required)

- GET: `/api/v1/users`
- POST: `/api/v1/users`
- GET: `/api/v1/users/:user_id`
- PUT: `/api/v1/users/:user_id`
- DELETE: `/api/v1/users/:user_id`

Resources

- [JWT authentication with Node.js and React](https://towardsdev.com/jwt-authentication-with-node-js-and-react-dc41ef0e6136)
