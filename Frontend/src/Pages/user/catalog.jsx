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

      <div className="display-products">
        <div className="filters">
          <h4>Filtres</h4>
          <div className="filter-items">
            <div className="first-filter-item">
              <label htmlFor="category">Secteur:</label>
              <select id="category">
                <option value="">Tous les secteurs</option>
                <option value="electronics">Hotelerie</option>
                <option value="clothing">Finance</option>
                <option value="immobilier">Immobilier</option>
              </select>
            </div>
            <div className="second-filter-item">

            </div>
          </div>
        </div>

        <div className="products">
          
        </div>
        <p>Nombre de produits: {products.length}</p>
        <div className="grid-products-double">

        </div>
      </div>
    </div>
  );
}