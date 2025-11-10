
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MONGO_URL || "mongodb://mongo:27017/learnify";
await mongoose.connect(mongoUrl, { dbName: "learnify" });

const Note = mongoose.model("Note", new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}));

app.get("/health", (req, res) => res.send("ok"));

app.get("/api/notes", async (_req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const note = await Note.create({ text: String(req.body.text || "hello") });
  res.status(201).json(note);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API listening on ${port}`));
