const sequelize = require("sequelize");
const { Movie } = require("../../config/database");

exports.getAllMovies = async () => {
  return Movie.findAll({
    // Set this to true if you don't have a model definition for your query
    raw: true,
  });
};

exports.getDetailMovie = async (id) => {
  return Movie.findOne({
    raw: true,
    where: { id },
  });
};

exports.addNewMovie = async (data) => {
  return Movie.create(data);
};

// update data
exports.updateMovie = async (id, newData) => {
  return Movie.update(newData, {
    where: {
      id,
    },
  });
};

// delete data
exports.deleteMovie = async (id) => {
  return Movie.destroy({
    where: { id },
  });
};
