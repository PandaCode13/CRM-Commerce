import "./css/catalog.css"
import { useState, useEffect } from "react";

export default function UserCatalog() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <div className="title">
        <h3>Catalogue de Produits</h3>
        <p>Découvrez notre large gamme de produits</p>
      </div>

      <div className="filter-container">
        <input type="text" name="filter" id="" placeholder="Rechercher un produit..." />
        <button onSearch={() => {}}>Rechercher</button>
      </div>
    </div>
  );
}