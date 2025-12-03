import { db } from "../config/db.js";

export const Proyecto = {
  crear: async (data) => {
    const sql = `INSERT INTO proyectos (tipo_construccion_id, area, pisos, altura, banos)
                 VALUES (?, ?, ?, ?, ?)`;
    const [res] = await db.query(sql, [
      data.tipo,
      data.area,
      data.pisos,
      data.altura,
      data.banos
    ]);
    return res.insertId;
  }
};
