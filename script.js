async function fetchProducts() {
  try {
    const response = await fetch("https://mari0ddev.vercel.app/api/products");
    console.log(response); // Vezi răspunsul complet
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    console.log(data); // Vezi în Console dacă apar produsele

    const productContainer = document.getElementById("product-list");
    data.result.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${product.name}</h3>`;
      productContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
