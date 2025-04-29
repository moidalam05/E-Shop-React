const initialState = {
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
  rememberMe: false,
};

const savedUser = JSON.parse(localStorage.getItem("userInfo"));
const defaultState = savedUser
  ? { ...initialState, ...savedUser }
  : initialState;

function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGNUP": {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("userInfo", JSON.stringify(newState));
      return newState;
    }
    case "LOGIN": {
      const newState = { ...state, isLoggedIn: true };
      localStorage.setItem("userInfo", JSON.stringify(newState));
      return newState;
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}

export default signupReducer;
