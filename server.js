const express = require("express");
const app = express();

app.use(express.json());

// Ruta API pentru produse
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    products: [
      { id: 1, name: "Tricou", price: 99.99 },
      { id: 2, name: "Hanorac", price: 149.99 },
    ],
  });
});

// Port pentru Vercel (obligatoriu)
module.exports = app;

