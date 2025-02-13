const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Allows frontend to talk to backend
require("dotenv").config();

const app = express();
app.use(cors()); // Enable CORS for frontend access
app.use(express.json());

const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://api.printful.com/store/products", {
      headers: { Authorization: `Bearer ${PRINTFUL_API_KEY}` },
    });

    console.log("Printful Response:", response.data); // Logs API response in the backend

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});



app.listen(3000, () => console.log("Server running on http://localhost:3000"));
