import mongoose from "mongoose";

const FavoriteSchema = mongoose.Schema({
  songId: String,
});
export default mongoose.model("FavoriteSongsModel", FavoriteSchema);
