import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ProductContext } from "../../Context/ProductContext";

const Product = ({ product }) => {
  const { products, setProducts } = useContext(ProductContext);

  // destructure products
  const {
    productName,
    productType,
    color,
    size,
    productId,
    price,
    quantity,
    description,
  } = product;
  console.log(productType);

  // delete products
  const handleDelteProduct = (id) => {
    const filterdProducts = products.filter(
      (product) => product.productId !== id
    );

    setProducts(filterdProducts);
  };
  return (
    <>
      <tr>
        <td>{productName}</td>
        <td>{productType}</td>
        <td>{productId}</td>
        <td>{color}</td>
        <td>{size}</td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
        <td>{description}</td>
        <td>
          <MdDelete
            onClick={() => handleDelteProduct(productId)}
            title="Delete Products"
            style={{ fontSize: "24px", color: "red", cursor: "pointer" }}
          />
        </td>
      </tr>
    </>
  );
};

export default Product;
