const initialState = {
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
  rememberMe: false,
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, ...action.payload };
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        password: "",
        username: "",
        rememberMe: false,
      };
    default:
      return state;
  }
}

export default signupReducer;
