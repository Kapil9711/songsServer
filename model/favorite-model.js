import mongoose from "mongoose";

const FavoriteSchema = mongoose.Schema({
  songId: String,
  username: String,
});
export default mongoose.model("FavoriteSongsModel", FavoriteSchema);
