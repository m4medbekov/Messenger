import { Sequelize, DataTypes } from "sequelize";
import { userModel } from "./userModel";

const sequelize = new Sequelize(
  "messenger",
  "postgres",
  "6867",
  {
    host: "localhost",
    dialect: "postgres",
  }
  // `postgres://postgres:6867@localhost:5433/messenger`,
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to messenger`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {
  Sequelize,
  sequelize,
  users: userModel(sequelize, DataTypes),
};
export default db;
