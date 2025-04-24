const addToCartActionCreator = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});

const removeFromCartActionCreator = (cart) => ({
  type: "REMOVE_FROM_CART",
  payload: cart,
});

export { addToCartActionCreator, removeFromCartActionCreator };
