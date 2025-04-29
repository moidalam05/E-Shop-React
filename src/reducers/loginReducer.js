const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  rememberMe: false,
};

const savedLogin = JSON.parse(localStorage.getItem("loginInfo"));
const defaultState = savedLogin
  ? { ...initialState, ...savedLogin }
  : initialState;

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const newState = {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
      localStorage.setItem("loginInfo", JSON.stringify(newState));
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
};

export default loginReducer;
