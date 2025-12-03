import { db } from "../config/db.js";

export const Material = {
  getByCategoria: async (categoria_id) => {
    const [rows] = await db.query(
      "SELECT * FROM materiales WHERE categoria_id = ?",
      [categoria_id]
    );
    return rows;
  }
};
