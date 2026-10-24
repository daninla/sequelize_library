const { sequelize, Book } = require("./database/models");

async function testSync() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await Book.drop();
    console.log("Table books dropped.");

    await Book.sync();
    console.log("Table books created again.");
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

testSync();
