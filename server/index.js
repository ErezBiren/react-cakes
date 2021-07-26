import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cakesRoutes from "./routes/cakes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// todo: check why without this line the req.body is empty
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use("/cakes", cakesRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Cakes API");
});

const CONNECTION_URL = process.env.CONNECTION_STRING;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
