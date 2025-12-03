import { Categoria } from "../models/Categoria.js";

export const getCategorias = async (req, res) => {
  const data = await Categoria.getAll();
  res.json(data);
};
