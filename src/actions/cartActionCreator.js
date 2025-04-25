const addToCartActionCreator = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});

const removeFromCartActionCreator = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

const updateCartQuantity = (id, quantity) => ({
  type: "UPDATE_CART_QUANTITY",
  payload: { id, quantity },
});

export {
  addToCartActionCreator,
  removeFromCartActionCreator,
  updateCartQuantity,
};
