import FavortieModel from "../model/favorite-model.js";

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

export { createFavorite, getFavorite };
