async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch products");
  
      const data = await response.json();
      console.log("Products:", data);
  
      document.getElementById("products").innerHTML = data.result
        .map(product => `<p>${product.name}</p>`)
        .join("");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  fetchProducts();
  