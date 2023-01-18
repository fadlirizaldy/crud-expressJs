const sequelize = require("sequelize");
const { Cast } = require("../../config/database");

exports.getAllCasts = async () => {
  return Cast.findAll({
    // Set this to true if you don't have a model definition for your query
    raw: true,
  });
};

exports.getDetailCast = async (id) => {
  return Cast.findOne({
    raw: true,
    where: { id },
  });
};

exports.addNewCast = async (data) => {
  return Cast.create(data);
};

// update data
exports.updateCast = async (id, newData) => {
  return Cast.update(newData, {
    where: {
      id,
    },
  });
};

// delete data
exports.deleteCast = async (id) => {
  return Cast.destroy({
    where: { id },
  });
};
