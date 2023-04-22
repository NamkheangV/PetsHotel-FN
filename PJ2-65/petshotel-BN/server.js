import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Express + Javascript Server!!");
});

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
});
