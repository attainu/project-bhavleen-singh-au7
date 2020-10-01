const initialState = {
    user: {},
    error: "",
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_SUCCESS":
            return {
                ...state,
                error: "",
                user: action.payload,
                isAuthenticated: true,
            };
        case "SET_USER_ERROR":
            return {
                ...state,
                error: action.payload,
                isAuthenticated: false,
            };    
        default:
            return state;
    }
};

export default userReducer;
