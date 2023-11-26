import { useEffect, useState } from "react";
import { ProductContext } from "./../Context/ProductContext";
import ProductsTable from "../Components/ProductLists/ProductsTable";

import "./home.css";
import FormData from "../Components/ProductLists/FormData";
import { getProductsFromLocalStorage } from "../utils/getProductsFromLocalStorage";
const Home = () => {
  // products state
  const [products, setProducts] = useState(getProductsFromLocalStorage());

  // set products for local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <h1 style={{ textAlign: "center", margin: "10px" }}>Product List</h1>

      <div className="ProductContainer">
        <FormData />
        <ProductsTable />
      </div>
    </ProductContext.Provider>
  );
};

export default Home;
