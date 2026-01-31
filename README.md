# Contacts API

A REST API with JWT authentication and contact management. Built with Node.js, Express, and MongoDB.

## Tech Stack

- **Node.js** + **Express 5**
- **MongoDB** (Mongoose)
- **JWT** for auth
- **bcrypt** for password hashing

## Endpoints

### Auth

| Method | Path                 | Body / Headers              | Description        |
|--------|----------------------|-----------------------------|--------------------|
| POST   | `/api/user/register` | `{ username, email, password }` | Register a user   |
| POST   | `/api/user/login`    | `{ email, password }`       | Login, returns JWT |
| GET    | `/api/user/current`  | `Authorization: Bearer <token>` | Current user      |

### Contacts (requires auth)

| Method | Path                 | Description        |
|--------|----------------------|--------------------|
| GET    | `/api/contacts`      | List all contacts  |
| POST   | `/api/contacts`      | Create contact `{ name, email, phone }` |
| GET    | `/api/contacts/:id`  | Get one contact    |
| PUT    | `/api/contacts/:id`  | Update contact     |
| DELETE | `/api/contacts/:id`  | Delete contact     |

## Environment Variables

Create a `.env` file from `.env.example` and set:

| Variable              | Description                    |
|-----------------------|--------------------------------|
| `PORT`                | Server port (e.g. `5001`)      |
| `MONGODB_URI`         | MongoDB connection string      |
| `ACCESS_TOKEN_SECRET` | Secret used to sign JWTs       |

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment**

   Copy `.env.example` to `.env` and fill in your values.

3. **Run the server**

   ```bash
   npm run dev
   ```

   The API runs with nodemon; default port is `5001` unless overridden in `.env`.
