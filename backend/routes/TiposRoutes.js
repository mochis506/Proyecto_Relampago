import { Router } from "express";
import { getTipos } from "../controllers/TipoController.js";

const router = Router();
router.get("/", getTipos);
export default router;
