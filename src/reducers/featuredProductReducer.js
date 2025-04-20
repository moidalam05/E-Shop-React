const initialState = [];

const featuredProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEATURED_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default featuredProductReducer;
