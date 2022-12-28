import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { Button, BUTTON_TYPE } from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img className="product-card-image" src={imageUrl} alt="product" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
