import express from "express";
import {
  createFavorite,
  getFavorite,
} from "../controllers-middleware/middleware.js";
const router = express.Router();

router.route("/createFavorite").post(createFavorite);
router.route("/getFavorite").get(getFavorite);

export default router;
