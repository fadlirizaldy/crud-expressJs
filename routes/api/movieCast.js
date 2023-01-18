const response = require("../../config/response");

const express = require("express");
const router = express.Router();

const movieCastsController = require("../../controllers/movie_cast");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/").get((req, res, next) => {
  movieCastsController.getMovieWithCast(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.all("*", index);

module.exports = router;
