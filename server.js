import express from "express";
import connectDB from "./db/connect-db.js";
import dotenv from "dotenv";
import router from "./song-sparkle-router/route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/song-sparkle", router);

app.get("/", (req, res) => {
  res.send("hi");
});

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("listening on port 5000"));
  } catch (error) {
    console.log("error in connecting to db or server");
  }
};
start();
