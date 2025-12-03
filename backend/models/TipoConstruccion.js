import { db } from "../config/db.js";

export const TipoConstruccion = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM tipos_construccion");
    return rows;
  }
};
