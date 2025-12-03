import { Cotizacion } from "../models/Cotizacion.js";

export const crearCotizacion = async (req, res) => {
  try {
    const { tipoConstruccion, metros, total } = req.body;

    if (!tipoConstruccion || !metros || !total) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    // Aquí podrías crear un proyecto y obtener su id si lo necesitas
    // Por ahora, se guarda solo el total y tipoConstruccion
    const id = await Cotizacion.crear(tipoConstruccion, total); // Ajusta Cotizacion.crear para aceptar tipoConstruccion

    res.json({ id });
  } catch (error) {
    console.error("Error al crear cotización:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
