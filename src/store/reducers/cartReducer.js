import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};
export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        //13. gün dersi 1:58:00 (amaç referansları değiştirmek redux değişikliği anlamak için referansa bakıyor)
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
