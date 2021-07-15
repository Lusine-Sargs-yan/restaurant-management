import { createContext } from "react";
import { sumItems } from "./CartReducer";

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
export const initialState = {
  showCart: false,
  cartItems: storage,
  ...sumItems(storage),
};

export const CartState = createContext({
  initialState,
  dispatch: () => null,
});
