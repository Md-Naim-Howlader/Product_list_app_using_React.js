import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";

const FormData = () => {
  // use context api
  const { products, setProducts } = useContext(ProductContext);

  const [productsInput, setProductsInput] = useState({
    productName: "",
    productType: "",
    color: "",
    size: "",
    price: "",
    quantity: "",
    description: "",
    productId: new Date().getTime(),
  });

  // destructure productsInput

  const {
    productName,
    productType,
    color,
    size,
    price,
    quantity,
    description,
  } = productsInput;

  // handleChange
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setProductsInput({ ...productsInput, [fieldName]: e.target.value });
  };

  // handle add products
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setProducts([...products, productsInput]);
    setProductsInput({
      productName: "",
      productType: "",
      productId: "",
      color: "",
      size: "",
      price: "",
      quantity: "",
      description: "",
    });
  };
  return (
    <div className="form-data">
      <form onSubmit={handleFormSubmit}>
        <div className="inputFlex">
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              required
              onChange={handleChange}
              value={productName}
              type="text"
              name="productName"
              id="productName"
            />
          </div>
          <div>
            <label htmlFor="productType">Product Type</label>
            <select
              required
              value={productType}
              onChange={handleChange}
              name="productType"
              id="productType"
            >
              <option>Choose Type</option>
              <option value="Men's Wear" selected>
                Men's Wear
              </option>
              <option value="Women's Wear">Women's Wear</option>
              <option value="Kids Wer">Kids Waer</option>
              <option value="New Born">New Born Wear</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Choose Color</label>
            <select
              required
              value={color}
              onChange={handleChange}
              name="color"
              id="color"
            >
              <option>Choose Color</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Marron">Marron</option>
              <option value="Gray">Gray</option>
              <option value="Navy Blue">Navy Blue</option>
            </select>
          </div>
          <div>
            <label htmlFor="size">Select Size:</label>
            <select
              required
              onChange={handleChange}
              value={size}
              name="size"
              id="size"
            >
              <option>Choose Size</option>
              <option value="S">S</option>

              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXl">XXL</option>
            </select>
          </div>

          <div className="quantity">
            <label htmlFor="quantity">Enter Quantity</label>
            <input
              min="1"
              max="20"
              value={quantity}
              onChange={handleChange}
              type="number"
              name="quantity"
              id="quantity"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              onChange={handleChange}
              value={price}
              min="100"
              max="5000"
              type="number"
              name="price"
              id="price"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            required
            minLength={20}
            onChange={handleChange}
            value={description}
            name="description"
            id="description"
          ></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormData;
