import { TipoConstruccion } from "../models/TipoConstruccion.js";

export const getTipos = async (req, res) => {
  const data = await TipoConstruccion.getAll();
  res.json(data);
};
