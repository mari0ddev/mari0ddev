const apiKey = "YOUR_PRINTFUL_API_KEY";
fetch("https://api.printful.com/store/products", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${eLaMfG0MWYG0ojWCVFqjPeEO5dfPJr6XY6NuwsI4}`,
    "Content-Type": "application/json"
  }
})
export default function handler(req, res) {
  res.status(200).json({ message: "API Works!", products: [] });
}


