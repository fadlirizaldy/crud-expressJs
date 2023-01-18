"use strict";

const response = require("../../config/response");
const { db } = require("../../config/database");
const castsModule = require("./casts.module");

exports.getAllCasts = async (req, res, next) => {
  const responseAllCasts = await castsModule.getAllCasts();
  const resCasts = responseAllCasts.map((m) => {
    return { id: m.id, name: m.name };
  });
  //   console.log(responseAllMovies);
  return response.res200(res, "000", "Success get all movies.", resCasts);
};

exports.getDetailCast = async (req, res, next) => {
  //   console.log(req.params.id);
  const responseDetail = await castsModule.getDetailCast(req.params.id);
  if (responseDetail === null) {
    return response.res200(
      res,
      "001",
      `Cast with id ${req.params.id} not found!`
    );
  }
  // console.log(responseDetail);
  return response.res200(
    res,
    "000",
    `Success get cast with id ${req.params.id}.`,
    responseDetail
  );
};

//add data
exports.addNewCast = async (req, res, next) => {
  await castsModule.addNewCast(req.body);
  return response.res200(res, "000", `Success input data`);
};

// update
exports.updateCast = async (req, res, next) => {
  const responseAllCasts = await castsModule.getAllCasts();
  const checkId = responseAllCasts.filter(
    (m) => m.id === parseInt(req.params.id)
  );
  if (checkId.length > 0) {
    await castsModule.updateCast(parseInt(req.params.id), req.body);
    return response.res200(res, "000", `Success update data`);
  }
  return response.res200(
    res,
    "000",
    `Data with id ${req.params.id} not found!`
  );
};

// delete data
exports.deleteCast = async (req, res, next) => {
  const responseAllCasts = await castsModule.getAllCasts();
  const checkId = responseAllCasts.filter(
    (m) => m.id === parseInt(req.params.id)
  );
  if (checkId.length > 0) {
    await castsModule.deleteCast(req.params.id);
    return response.res200(res, "000", `Success delete data`);
  }
  return response.res200(
    res,
    "000",
    `Data with id ${req.params.id} not found!`
  );
};
