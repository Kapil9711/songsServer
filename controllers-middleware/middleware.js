import FavortieModel from "../model/favorite-model.js";
import LoginModel from "../model/login-model.js";

const createFavorite = async (req, res) => {
  try {
    const data = req.body;
    const Exist = await FavortieModel.findOne(data);
    if (Exist) {
      res.status(200).json({ msg: "already exists", Exist });
      return;
    }
    const newSongs = await FavortieModel.create(data);
    res.status(201).json({ msg: "created", newSongs });
  } catch (error) {
    res.status(501).json({ msg: "internal error" });
  }
};

const getFavorite = async (req, res) => {
  try {
    const allSongData = await FavortieModel.find({});
    res.status(200).json(allSongData);
  } catch (error) {
    res.status(501).json({ msg: "error in geting all songs" });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { songId } = req.body;
    const deleted = await FavortieModel.findOneAndDelete({ songId });
    res.status(201).json({ msg: "deleted" });
  } catch (error) {
    res.status(501).json({ msg: "error occur in deleting" });
  }
};

// *********************************************login form controllers***********************

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const Exist = await LoginModel.findOne(data);
    if (Exist) {
      res.status(200).json({ msg: "already exists", Exist });
      return;
    }
    const newUser = await LoginModel.create(data);
    res.status(201).json({ msg: "created", newUser });
  } catch (error) {
    res.status(501).json({ msg: "internal error" });
  }
};

const getUser = async (req, res) => {
  try {
    const data = req.body;
    const userExist = await LoginModel.findOne(data);
    if (userExist)
      res.status(200).json({ msg: "login successful", user: userExist });
    res.status(204).json({ msg: "please register" });
  } catch (error) {
    res.status(501).json({ msg: "error in geting all songs" });
  }
};

export { createFavorite, getFavorite, deleteFavorite, createUser, getUser };
