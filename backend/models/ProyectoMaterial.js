import { db } from "../config/db.js";

export const ProyectoMaterial = {
  agregar: async (proyecto_id, categoria_id, material_id) => {
    const sql = `INSERT INTO proyecto_materiales (proyecto_id, categoria_id, material_id)
                 VALUES (?, ?, ?)`;
    await db.query(sql, [proyecto_id, categoria_id, material_id]);
  }
};
