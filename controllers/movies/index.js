"use strict";

const response = require("../../config/response");
const { db } = require("../../config/database");
const moviesModule = require("./movies.module");

exports.getAllMovies = async (req, res, next) => {
  const responseAllMovies = await moviesModule.getAllMovies();
  const resMovies = responseAllMovies.map((m) => {
    return { id: m.id, title: m.title };
  });
  // console.log(responseAllMovies);
  return response.res200(res, "000", "Success get all movies.", resMovies);
};

exports.getDetailMovie = async (req, res, next) => {
  //   console.log(req.params.id);
  const responseDetail = await moviesModule.getDetailMovie(req.params.id);
  if (responseDetail === null) {
    return response.res200(
      res,
      "001",
      `Movie with id ${req.params.id} not found!`
    );
  }
  // console.log(responseDetail);
  return response.res200(
    res,
    "000",
    `Success get movies with id ${req.params.id}.`,
    responseDetail
  );
};

//add data
exports.addNewMovie = async (req, res, next) => {
  await moviesModule.addNewMovie(req.body);
  return response.res200(res, "000", `Success input data`);
};

// update
exports.updateMovie = async (req, res, next) => {
  const responseAllMovies = await moviesModule.getAllMovies();
  const checkId = responseAllMovies.filter(
    (m) => m.id === parseInt(req.params.id)
  );
  if (checkId.length > 0) {
    await moviesModule.updateMovie(parseInt(req.params.id), req.body);
    return response.res200(res, "000", `Success update data`);
  }
  return response.res200(
    res,
    "000",
    `Data with id ${req.params.id} not found!`
  );
};

// delete data
exports.deleteMovie = async (req, res, next) => {
  const responseAllMovies = await moviesModule.getAllMovies();
  const checkId = responseAllMovies.filter(
    (m) => m.id === parseInt(req.params.id)
  );
  if (checkId.length > 0) {
    await moviesModule.deleteMovie(req.params.id);
    return response.res200(res, "000", `Success delete data`);
  }
  return response.res200(
    res,
    "000",
    `Data with id ${req.params.id} not found!`
  );
};
