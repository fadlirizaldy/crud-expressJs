const { response } = require("express");
const sequelize = require("sequelize");
const { db, movie_cast, Movie, Cast } = require("../../config/database");

// Associate
Movie.belongsToMany(Cast, {
  through: {
    model: movie_cast,
  },
  foreignKey: "movie_id",
});

Cast.belongsToMany(Movie, {
  through: {
    model: movie_cast,
  },
  foreignKey: "cast_id",
});

exports.getMovieWithCast = async () => {
  const responseData = await Movie.findAll({
    include: [Cast],
  });

  const arr = responseData.map((m) => {
    const data = { id: m.id, name: m.title };
    const tmp_cast = m.casts.map((c) => {
      return { name: c.name, birthday: c.birthday, deadday: c.deadday };
    });
    data.casts = tmp_cast;
    return data;
  });

  return arr;
  // pake query
  // const queryCommand = "SELECT * FROM cast AS c JOIN movie_cast AS mc ON c.id = mc.cast_id JOIN movie as m ON m.id = mc.movie_id";
  // return db.query(queryCommand);
};
