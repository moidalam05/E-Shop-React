const initialState = [];

const shopProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOP_PRODUCTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default shopProductsReducer;
