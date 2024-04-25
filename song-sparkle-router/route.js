import express from "express";
import {
  createFavorite,
  deleteFavorite,
  getFavorite,
  createUser,
  getUser,
} from "../controllers-middleware/middleware.js";
const router = express.Router();

// fav route
router.route("/createFavorite").post(createFavorite);
router.route("/getFavorite").get(getFavorite);
router.route("/deleteFavorite").post(deleteFavorite);

// login route
router.route("/createUser").post(createUser);
router.route("/getUser").post(getUser);

// hello
export default router;
