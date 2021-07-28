import express from "express";
import CakeMessage from "../models/CakeModel.js";

const router = express.Router();

export const getCakes = async (req, res) => {
  try {
    const cakeMessage = await CakeMessage.find();

    res.status(200).json(cakeMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCake = async (req, res) => {
  console.log("2" + JSON.stringify(req.body));

  const { name, price } = req.body;

  const newCakeMessage = new CakeMessage({
    name: "name",
    price: 666,
  });

  try {
    await newCakeMessage.save();

    res.status(201).json(newCakeMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
