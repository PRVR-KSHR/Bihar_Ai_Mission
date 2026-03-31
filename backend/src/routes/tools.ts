import { Router, Request, Response } from "express";
import { toolsData, categoriesData } from "../data/tools";

const router = Router();

// GET all tools
router.get("/", (req: Request, res: Response) => {
  const { category } = req.query;

  let filteredTools = toolsData;

  if (category) {
    filteredTools = toolsData.filter(
      (tool) => tool.category.toLowerCase() === (category as string).toLowerCase()
    );
  }

  res.json({
    success: true,
    count: filteredTools.length,
    data: filteredTools,
  });
});

// GET tool by ID
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const tool = toolsData.find((t) => t.id === id);

  if (!tool) {
    return res.status(404).json({
      success: false,
      message: "Tool not found",
    });
  }

  res.json({
    success: true,
    data: tool,
  });
});

// GET tools by category
router.get("/category/:category", (req: Request, res: Response) => {
  const { category } = req.params;
  const filteredTools = toolsData.filter(
    (tool) => tool.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredTools.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No tools found in this category",
    });
  }

  res.json({
    success: true,
    count: filteredTools.length,
    data: filteredTools,
  });
});

export default router;
