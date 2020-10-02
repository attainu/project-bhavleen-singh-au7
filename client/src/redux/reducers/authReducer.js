const initialState = {
    user: null,
    error: "",
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGIN_SUCCESS":
            return {
                ...state,
                error: "",
                user: action.payload,
                isAuthenticated: true,
            };
        case "SET_LOGIN_ERROR":
            return {
                ...state,
                error: action.payload,
                isAuthenticated: false,
            };  
        case "UNSET_LOGIN_ERROR":
            return {
                ...state,
                error: ""
            }    
        case "SET_LOGOUT_SUCCESS":
            return {
                ...state,
                user: null,
                error: "",
                isAuthenticated: false
            }      
        default:
            return state;
    }
};

export default userReducer;
