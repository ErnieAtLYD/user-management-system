# Simple User Management System

A simple user management system based on concepts taught at BST.

- Backend: Node, MySQL, ExpressJS, knex

## Installation instructions

- create DB on MySQL
  - `CREATE DATABASE user_management_system;`
- edit `knexfile.js` with local DB user, password, and DB name
- `cd backend`
  - `npm install`
  - `npm run db:migrate`
  - `npm run db:seed`
  - `npm run start`

## DB Schema (`user_management_system`)

### users

## API Endpoints

- GET: `/api/v1/users`
- POST: `/api/v1/users`
- GET: `/api/v1/users/:user_id`
- PUT: `/api/v1/users/:user_id`
- DELETE: `/api/v1/users/:user_id`
