const { Sequelize } = require("sequelize");
const config = require("./src/config/config.json");
const Genre = require("./src/models/genre")(sequelize, Sequelize.DataTypes);

const dbConfig = config.development;
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false,
  },
);

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
