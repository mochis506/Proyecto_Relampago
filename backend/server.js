import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./config/db.js";

import tiposRoutes from "./routes/tiposRoutes.js";
import categoriasRoutes from "./routes/categoriasRoutes.js";
import materialesRoutes from "./routes/materialesRoutes.js";
import proyectosRoutes from "./routes/proyectosRoutes.js";
import cotizacionesRoutes from "./routes/cotizacionesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/tipos", tiposRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/materiales", materialesRoutes);
app.use("/api/proyectos", proyectosRoutes);
app.use("/api/cotizaciones", cotizacionesRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Backend corriendo en puerto " + PORT);
});
