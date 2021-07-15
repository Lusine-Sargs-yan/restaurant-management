import {
  ADD_TO_CART,
  CLEAR,
  DECREASE,
  INCREASE,
  REMOVE_ITEM,
  SHOW_HIDE_CART,
} from "../Types";

const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
        ...sumItems([]),
      };
    }
    case ADD_TO_CART: {
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    }
    case INCREASE:
      let element = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let filteredState = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      element.quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...filteredState, element],
      };
    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};

export default cartReducer;
