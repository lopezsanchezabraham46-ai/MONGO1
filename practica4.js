use("bd_py");

// BALONES
db.balon.updateOne(
    { Modelo: "Al Rihla Pro" },
    { $set: { Año: 2025 } }
);

db.balon.updateOne(
    { Modelo: "Premier League Flight" },
    { $set: { Marca: "Nike Football" } }
);

// ZAPATOS
db.Zapatos.updateOne(
    { Modelo: "Air Jordan 1 Retro High" },
    { $set: { Marca: "Nike Inc." } }
);

db.Zapatos.updateOne(
    { Modelo: "Ultraboost Light" },
    { $set: { Año: 2026 } }
);

// TELEVISIONES
db.TELEVISIONES.updateOne(
    { Modelo: "OLED G4" },
    { $set: { Marca: "LG Electronics" } }
);

db.TELEVISIONES.updateOne(
    { Modelo: "Neo QLED 8K QN900D" },
    { $set: { Año: 2026 } }
);

// AUDÍFONOS
db.Audifonos.updateOne(
    { Modelo: "AirPods Pro 3" },
    { $set: { Marca: "Apple Inc." } }
);

db.Audifonos.updateOne(
    { Modelo: "WH-1000XM6" },
    { $set: { Año: 2026 } }
);

// CONSOLAS
db.Consolas.updateOne(
    { Modelo: "PlayStation 5 Pro" },
    { $set: { Marca: "Sony Interactive Entertainment" } }
);

db.Consolas.updateOne(
    { Modelo: "Xbox Series X2" },
    { $set: { Año: 2026 } }
);
