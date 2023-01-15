import express, { Express, Request, Response } from "express";
import db from "../models";

const User = db.users;

const saveUser = async (req: Request, res: Response, next: any) => {
  try {
    const userName = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });

    if (userName) {
      return res.json(409).send("username already taken");
    }

    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailCheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default { saveUser };
