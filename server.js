app.get("/api/products", async (req, res) => {
  try {
    const response = await fetch("https://api.printful.com/store/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("💡 Răspuns API Printful:", data); // 🔥 Vezi ce primește serverul tău

    res.json(data);
  } catch (error) {
    console.error("❌ Eroare la obținerea produselor:", error);
    res.status(500).json({ error: "Eroare la obținerea produselor" });
  }
});
