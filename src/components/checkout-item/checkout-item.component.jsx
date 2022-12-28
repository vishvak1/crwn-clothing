import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemQuantity,
  CheckoutItemValue,
  CheckoutItemArrow,
  ImageContainer,
  CheckoutItemPrice,
  CheckoutItemRemoveButton,
  CheckoutItemName,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHanlder = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={removeItemHanlder}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow onClick={addItemHandler}>&#10095;</CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <CheckoutItemRemoveButton onClick={clearItemHandler}>
        &#9747;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
