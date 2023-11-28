import { useContext } from "react";
import ProductRow from "./ProductRow";
import "./product.css";
import { ProductContext } from "../../Context/ProductContext";
const ProductsTable = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product">
      {products.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product ID</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <ProductRow
                  className="product-row"
                  key={product.productId}
                  product={product}
                />
              ))}
          </tbody>
        </table>
      
      ) : (
        <div>
          {" "}
          <h1>No Products added yet!</h1>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
