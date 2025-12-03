const pool = require("../config/db");

exports.guardarCotizacion = async (req, res) => {
  try {
    const { nombre, correo, descripcion } = req.body;

    console.log("Datos recibidos:", req.body);

    const [result] = await pool.query(
      `INSERT INTO cotizaciones (nombre, correo, descripcion)
       VALUES (?, ?, ?)`,
      [nombre, correo, descripcion]
    );

    res.json({ cotizacion_id: result.insertId });

  } catch (err) {
    console.error("Error guardando:", err);
    res.status(500).json({ error: "Error guardando cotización" });
  }
};
