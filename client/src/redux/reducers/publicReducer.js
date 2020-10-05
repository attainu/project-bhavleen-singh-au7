const initialState = {
    posts: null,
    profile: null
};

const publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
              ...state,
              posts: action.payload
            }
        default:
            return state;
    }
};

export default publicReducer;
