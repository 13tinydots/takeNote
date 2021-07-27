import { Router } from "express";
import db from "../db/service.js";
const router = new Router();
router.get("/notes", async (req, res) => {
  const notes = await db.index();
  res.status(200).json(notes);
});
router.post("/notes", ({ body }, res) => {
  db.create(body);
  res.status(201).send("Note Added!");
});
export default router;
