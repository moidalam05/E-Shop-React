const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
        totalQuantity: state.totalQuantity + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        totalAmount: state.totalAmount - action.payload.price,
        totalQuantity: state.totalQuantity - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
