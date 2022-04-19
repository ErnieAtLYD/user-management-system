# Simple CRUD Management System

A simple management system that handles CRUD based on concepts taught at BST.

NOTE: This does NOT handle user logins or registrations. We use the concept as "users" as a resource example, but this can be swapped out with any resource as appropriate.

- Frontend: axios, React: Create React App, React Router
- Backend: Node, MySQL, ExpressJS, knex

NOTE: Using [PicoCSS](https://picocss.com/), a minimal CSS framework for semantic HTML

## Installation instructions

- `npm install`
- create DB on MySQL
  - `CREATE DATABASE crud_management_system;`
- edit `knexfile.js` with local DB user, password, and DB name
- `cd backend`
  - `npm install`
  - `npm run db:migrate`
  - `npm run db:seed`
- `cd frontend`
  - Edit `/frontend/.env` as needed if you're using a different localhost server URL
  - `npm install`

## DB Schema (`crud_management_system`)

### users

| name         | type       | nullable | notes |
| ------------ | ---------- | -------- | ----- |
| id           | int()      | `false`  |       |
| first_name   | string     | `false`  |       |
| last_name    | string     | `false`  |       |
| email        | string     | `false`  |       |
| avatar       | string     | `true`   |       |
| last_created | datetime() |          |       |
| last_updated | datetime() |          |       |

## API Endpoints

- GET: `/api/v1/users`
- POST: `/api/v1/users`
- GET: `/api/v1/users/:user_id`
- PUT: `/api/v1/users/:user_id`
- DELETE: `/api/v1/users/:user_id`
