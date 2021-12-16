import express from "express";
import { getPostMain } from "../controllers/post.js";

var router = express.Router();

/* GET home page. */
router.get("/main", getPostMain);

export default router;
