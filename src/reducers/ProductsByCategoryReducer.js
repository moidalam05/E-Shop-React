const initialState = [];

const productsByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS_BY_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default productsByCategoryReducer;
