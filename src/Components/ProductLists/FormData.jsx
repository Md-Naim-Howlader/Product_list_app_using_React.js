import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";

const FormData = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const { products, setProducts } = useContext(ProductContext);
  // clear products data
  const clearProductsInput = () => {
    setProductName("");
    setColor("");
    setSize("");
    setPrice(0);
    setQuantity(0);
    setDescription("");
  };

  // handle add products
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAddProduct = {
      productName,
      productType,
      color,
      size,
      price,
      quantity,
      description,
      productId: new Date().getTime(),
    };
    setProducts([...products, newAddProduct]);

    // clear inputs
    clearProductsInput();
  };
  return (
    <div className="form-data">
      <form onSubmit={handleFormSubmit}>
        <div className="inputFlex">
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              required
              onChange={(e) => setProductName(e.target.value)}
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
              onChange={(e) => setProductType(e.target.value)}
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
              onChange={(e) => setColor(e.target.value)}
              name="color"
              id="color"
            >
              <option>Choose Color</option>
              <option value="Black" selected>
                Black
              </option>
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
              onChange={(e) => setSize(e.target.value)}
              value={size}
              name="size"
              id="size"
            >
              <option>Choose Size</option>
              <option value="S" selected>
                S
              </option>

              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXl">XXL</option>
            </select>
          </div>

          <div className="quantity">
            <label htmlFor="quantity">Select Quantity</label>
            <select
              required
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              name="quantity"
              id="quantity"
            >
              <option>Choose</option>
              <option value="0" selected>
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name=""
            id="description"
          ></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormData;
