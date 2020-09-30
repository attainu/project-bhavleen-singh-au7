const initialState = {
  user: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
      default:
      return state;
  }
};

export default userReducer;
