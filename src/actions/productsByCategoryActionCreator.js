const productsByCategoryActionCreator = (products) => ({
  type: "SET_PRODUCTS_BY_CATEGORY",
  payload: products,
});

export default productsByCategoryActionCreator;
