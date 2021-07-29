import { Router } from "express";
import db from "../db/service.js";
const realPath = null;

// Define the API routes
const router = new Router();
router.get("/notes", async (req, res) => {
  const notes = await db.index();
  // make sure to return status code 200
  return res.status(200).json(notes);
});

// Post method for a note
router.post("/notes", ({ body }, res) => {
  db.create(body);
  console.log(body);
  return res.status(200).json(body);
});

export default router;
