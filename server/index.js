import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import cakesRoutes from "./routes/cakes.js";

const app = express();

app.use(cors());

app.use("/cakes", cakesRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const CONNECTION_URL =
  "mongodb+srv://erez:Fj2fpVSq8axxBrEB@cluster0.b2stk.mongodb.net/Cakes?retryWrites=true&w=majority";

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
