import express from "express";
import { content } from "./database/Content.js";
import { Types, isValidObjectId } from "mongoose";
import Joi from "joi";

const routes = express.Router();

const schema = Joi.object({
  cover: Joi.string().uri().required(),
  track: Joi.string().uri().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  genre: Joi.string().required(),
  year: Joi.number().required(),
  duration: Joi.number().required(),
  trackNumber: Joi.number().required(),
});

routes.get("/contents", async (req, res) => {
  try {
    const results = await content.find();
    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "No results found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get("/genre", async (req, res) => {
  try {
    const results = await content.find();
    if (results.length > 0) {
      const list = [];
      results.forEach((c) => {
        if (!list.includes(c.genre)) list.push(c.genre);
      });
      res.status(200).json(list);
    } else {
      res.status(404).json({ message: "No results found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get("/content/:code", async (req, res) => {
  const { code } = req.params;
  if (!isValidObjectId(code)) {
    return res.status(400).json({ message: "Invalid Code!" });
  }
  try {
    const result = await content.findById(Types.ObjectId(code));
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No results found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.post("/content", async (req, res) => {
  try {
    const validated = await schema.validateAsync(req.body);
    const newContent = new content(validated);
    const result = await newContent.save();
    res.status(201).json(result);
  } catch (error) {
    if (error.isJoi) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

export default routes;
