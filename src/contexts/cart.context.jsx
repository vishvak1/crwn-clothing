import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`undefined type of ${type} in CartReducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(CartReducer, INITIAL_STATE);

  const setCartItems = (cartItems) => {
    const cartCount = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );

    const cartTotal = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartCount,
        cartTotal,
        cartItems,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen: (bool) => {
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    },
    cartItems,
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
