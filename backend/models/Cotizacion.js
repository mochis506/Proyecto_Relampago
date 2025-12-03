import { db } from "../config/db.js";

export const Cotizacion = {
  crear: async (tipoConstruccion, total) => {
    try {
      const sql = "INSERT INTO cotizaciones (tipoConstruccion, total) VALUES (?, ?)";
      const [res] = await db.query(sql, [tipoConstruccion, total]);
      return res.insertId;
    } catch (err) {
      console.error("Error en el modelo Cotizacion:", err);
      throw err;
    }
  }
};
