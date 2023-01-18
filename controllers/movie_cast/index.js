"use strict";

const response = require("../../config/response");
const { db } = require("../../config/database");
const movieCastsModule = require("./movieCasts.module");

// getMovieWithCast
exports.getMovieWithCast = async (req, res, next) => {
  const responseMovieWithCasts = await movieCastsModule.getMovieWithCast();
  return response.res200(res, "000", "Success get all movies.", responseMovieWithCasts);
};
