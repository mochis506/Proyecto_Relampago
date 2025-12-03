const pool = require("../config/db");

exports.guardarCotizacion = async (req, res) => {
  try {
    console.log("📩 Datos recibidos en /cotizacion:", req.body);

    const { nombre, correo, descripcion } = req.body;

    console.log("🔍 Intentando conectar a la BD...");

    const [result] = await pool.query(
      `INSERT INTO cotizaciones (nombre, correo, descripcion)
       VALUES (?, ?, ?)`,
      [nombre, correo, descripcion]
    );

    console.log("✅ Insert exitoso. ID:", result.insertId);

    res.json({ cotizacion_id: result.insertId });

  } catch (err) {
    console.error("❌ Error guardando:", err);
    res.status(500).json({ error: "Error guardando cotización" });
  }
};
