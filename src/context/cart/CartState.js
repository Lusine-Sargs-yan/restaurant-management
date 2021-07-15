import { useContext, useReducer } from "react";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CLEAR,
} from "../Types";
import { cartReducer } from "./CartReducer";
import { CartState, initialState } from "./CartContext";

export const useCartContext = () => useContext(CartState);
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (payload) => {
    dispatch({ type: ADD_TO_CART, payload });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increase = (payload) => {
    dispatch({ type: INCREASE, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR });
  };
  return (
    <CartState.Provider
      value={{
        ...{
          ...cartState,
          addToCart,
          showHideCart,
          removeItem,
          dispatch,
          increase,
          decrease,
          clearCart,
        },
      }}
    >
      {children}
    </CartState.Provider>
  );
};

export default CartProvider;
