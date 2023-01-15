import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize, { Sequelize } from "sequelize";
import cookieParser, { CookieParseOptions } from "cookie-parser";
import db from "./models";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
