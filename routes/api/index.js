const express = require("express");
const response = require("../../config/response");
const router = express.Router();

const index = function (req, res, next) {
  response.res404(res);
};

router.all("/", index);
router.all("/connect", (req, res, next) => {
  response.res200(res, "000", "Connection Established");
});

router.use("/movies", require("./movies"));
router.use("/casts", require("./casts"));
router.use("/movie_cast", require("./movieCast"));

router.all("*", index);
module.exports = router;
