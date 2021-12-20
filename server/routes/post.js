import express from "express";
import { getPostMain, postPost } from "../controllers/post.js";
var router = express.Router();

/* GET home page. */
router.get("/main", getPostMain);
router.post("/", postPost);

export default router;
