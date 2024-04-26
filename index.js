import express from "express";
import connectDB from "./db/connect-db.js";
import dotenv from "dotenv";
import router from "./song-sparkle-router/route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://kapil9711.github.io/Song-sparkle/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/song-sparkle", router);

app.get("/", (req, res) => {
  res.json("hi");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("listening on port 5000"));
  } catch (error) {
    console.log("error in connecting to db or server");
  }
};
start();
