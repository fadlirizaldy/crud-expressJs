const response = require("../../config/response");

const express = require("express");
const router = express.Router();

const castController = require("../../controllers/casts");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/").get((req, res, next) => {
  castController.getAllCasts(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/detail/:id").get((req, res, next) => {
  castController.getDetailCast(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/").post((req, res, next) => {
  castController.addNewCast(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.route("/:id").delete((req, res, next) => {
  castController.deleteCast(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

//update cast
router.route("/:id").patch((req, res, next) => {
  castController.updateCast(req, res).catch((error) => {
    console.error(error);
    return response.res500(res, error.message);
  });
});

router.all("*", index);

module.exports = router;
