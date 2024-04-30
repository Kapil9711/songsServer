import express from "express";
import connectDB from "./db/connect-db.js";
import dotenv from "dotenv";
import router from "./song-sparkle-router/route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.urlencoded({ extended: false }));

// app.use(
//   cors({
//     origin: ["https://kapil9711.github.io/Song-sparkle/"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

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
