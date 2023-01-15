import express, { Express, Router } from "express";
import userController from "../controllers/userController";
import userAuth from "../middleware/userAuth";
const { signup, login } = userController;

const router: Router = express.Router();

router.post("/signup", userAuth.saveUser, signup);
router.post("/login", login);

export default router;
