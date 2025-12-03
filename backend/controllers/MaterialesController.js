import { Material } from "../models/Material.js";

export const getMaterialesPorCategoria = async (req, res) => {
  const data = await Material.getByCategoria(req.params.id);
  res.json(data);
};
