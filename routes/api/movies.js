const response = require("../../config/response");

const express = require("express");
const router = express.Router();

const movieController = require("../../controllers/movies");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/").get((req, res, next) => {
  movieController.getAllMovies(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/detail/:id").get((req, res, next) => {
  movieController.getDetailMovie(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/").post((req, res, next) => {
  movieController.addNewMovie(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/:id").delete((req, res, next) => {
  movieController.deleteMovie(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/:id").patch((req, res, next) => {
  movieController.updateMovie(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.all("*", index);

module.exports = router;
