import express from "express";
import {
  createFavorite,
  deleteFavorite,
  getFavorite,
} from "../controllers-middleware/middleware.js";
const router = express.Router();

router.route("/createFavorite").post(createFavorite);
router.route("/getFavorite").get(getFavorite);
router.route("/deleteFavorite").post(deleteFavorite);

export default router;
