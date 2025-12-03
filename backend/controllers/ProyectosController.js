import { Proyecto } from "../models/Proyecto.js";
import { ProyectoMaterial } from "../models/ProyectoMaterial.js";

export const crearProyecto = async (req, res) => {
  const proyectoId = await Proyecto.crear(req.body);

  for (const item of req.body.materiales) {
    await ProyectoMaterial.agregar(
      proyectoId,
      item.categoria_id,
      item.material_id
    );
  }

  res.json({ proyectoId });
};
