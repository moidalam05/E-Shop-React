const searchActionCreator = (searchCateogry) => ({
  type: "SET_SEARCH_RESULTS",
  payload: searchCateogry,
});

export default searchActionCreator;
