// Update with your config settings.
require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://pgxgoudw:QGe7BCVcwF_M2mbM2F1n-XsjgmOJH4J0@jelani.db.elephantsql.com/pgxgoudw",
  DATABASE_URL_DEVELOPMENT = "postgres://qyovodgj:VHtXj-cD9ZVu2K8OZHieRez_hAq15zRC@jelani.db.elephantsql.com/qyovodgj",
  DATABASE_URL_TEST = "postgres://paqynnai:RyE-0jWQPY6NSUUg7wsviVKRY-BFqWUZ@jelani.db.elephantsql.com/paqynnai",
  DATABASE_URL_PREVIEW = "postgres://ewqkwtcc:8MwKCvDm3G1XXGPv0UD8KpuHCURakoLY@jelani.db.elephantsql.com/ewqkwtcc",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
