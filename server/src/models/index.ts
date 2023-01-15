import { Sequelize, DataTypes } from "sequelize";
import { userModel } from "./userModel";

const sequelize = new Sequelize(
  `postgres://postgres:6867@localhost:5433/messenger`,
  { dialect: "postgres" }
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
