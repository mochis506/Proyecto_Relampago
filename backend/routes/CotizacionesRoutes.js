import { Router } from "express";
import { crearCotizacion } from "../controllers/CotizacionesController.js";

const router = Router();
router.post("/", crearCotizacion);
export default router;
