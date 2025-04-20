const initialState = [];

const relatedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RELATED_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default relatedProductReducer;
