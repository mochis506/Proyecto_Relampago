import { Router } from "express";
import { crearProyecto } from "../controllers/ProyectosController.js";

const router = Router();
router.post("/", crearProyecto);
export default router;
