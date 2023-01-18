"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  timezone: "+07:00",
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

db.authenticate()
  .then(() => console.log(`Connected to database : ${DB_HOST}:${DB_PORT}`))
  .catch((e) => {
    console.error(`Unable to connect to the database!`);
    console.log(e.sqlMessage);
  });

const movie_cast = require("../models/movie_cast");
const Cast = require("../models/cast");
const Movie = require("../models/movie");

module.exports = {
  Cast: Cast(db, DataTypes),
  movie_cast: movie_cast(db, DataTypes),
  Movie: Movie(db, DataTypes),
  db,
};
