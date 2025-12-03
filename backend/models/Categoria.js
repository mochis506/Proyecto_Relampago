import { db } from "../config/db.js";

export const Categoria = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM categorias");
    return rows;
  }
};
