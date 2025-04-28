const totalPriceActionCreator = (totalPrice) => ({
  type: "SET_TOTAL_PRICE",
  payload: totalPrice,
});

export default totalPriceActionCreator;
