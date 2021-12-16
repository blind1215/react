import express from "express";
import conn from "../db/index.js";
var router = express.Router();
import { postUser, postUserLogin } from "../controllers/user.js";

/* GET users listing. */
router.post("/", postUser);
router.post("/token", postUserLogin);

export default router;
