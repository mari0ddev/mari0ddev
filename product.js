import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.printful.com/store/products", {
      method: "GET",
      headers: {
        "Authorization": "Bearer iITvOByFzELo9bXblIvYgLHYkx7Fad6mOfn5JEm6  ",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.result) {
          setProducts(data.result);
        }
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div>
      <h2>Produse disponibile</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.thumbnail_url} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
