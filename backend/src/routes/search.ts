import { Router, Request, Response } from "express";
import { toolsData } from "../data/tools";

const router = Router();

// Search tools
router.get("/", (req: Request, res: Response) => {
  const { q } = req.query;

  if (!q || typeof q !== "string") {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const searchQuery = q.toLowerCase();
  const results = toolsData.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.category.toLowerCase().includes(searchQuery) ||
      tool.features?.some((f) => f.toLowerCase().includes(searchQuery)) ||
      tool.useCases?.some((uc) => uc.toLowerCase().includes(searchQuery))
  );

  res.json({
    success: true,
    query: q,
    count: results.length,
    data: results,
  });
});

export default router;
