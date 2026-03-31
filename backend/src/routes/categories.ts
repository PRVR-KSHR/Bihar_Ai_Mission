import { Router, Request, Response } from "express";
import { categoriesData } from "../data/tools";

const router = Router();

// GET all categories
router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    count: categoriesData.length,
    data: categoriesData,
  });
});

// GET category by ID
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const category = categoriesData.find((c) => c.id === id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  res.json({
    success: true,
    data: category,
  });
});

export default router;
