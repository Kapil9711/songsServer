import mongoose from "mongoose";

const connectDB = (path) => {
  return mongoose.connect(path);
};

export default connectDB;
