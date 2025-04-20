const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  rememberMe: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        password: "",
        rememberMe: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
