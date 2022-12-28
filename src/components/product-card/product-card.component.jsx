import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { Button, BUTTON_TYPE } from "../button/button.component";

import {
  ProductCardContainer,
  ProductCardImage,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  const { name, imageUrl, price } = product;

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt="product" />
      <Footer className="footer">
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
