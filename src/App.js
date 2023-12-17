import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Root from "./Components/root2";
import Inner from "./Components/Inner";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        let prods = await fetch("https://fakestoreapi.com/products");
        prods = await prods.json();
        setProducts(prods);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Root products={products} setProduct={setProduct} />}
          />
          <Route path="/:productId" element={<Inner product={product} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
