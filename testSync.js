const { sequelize, Genre } = require("./src/models");

async function testSync() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await Genre.drop();
    console.log("Table genres dropped.");

    await Genre.sync();
    console.log("Table genres created again.");
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

testSync();
