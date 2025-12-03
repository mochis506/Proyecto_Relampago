import { Router } from "express";
import { getCategorias } from "../controllers/CategoriaController.js";

const router = Router();
router.get("/", getCategorias);
export default router;
