import { Router } from "express";
import { getMaterialesPorCategoria } from "../controllers/MaterialesController.js";

const router = Router();
router.get("/:id", getMaterialesPorCategoria);
export default router;
