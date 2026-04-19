import { Router } from "express";
import { db, contactSubmissions } from "@workspace/db";
import { insertContactSubmissionSchema } from "@workspace/db/schema";
import { desc } from "drizzle-orm";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = insertContactSubmissionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid data", details: parsed.error.flatten() });
  }
  const [row] = await db.insert(contactSubmissions).values(parsed.data).returning();
  return res.status(201).json(row);
});

router.get("/contact", async (_req, res) => {
  const rows = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  return res.json(rows);
});

export default router;
