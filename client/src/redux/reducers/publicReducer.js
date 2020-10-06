const initialState = {
    posts: null,
    publicProfile: null,
};

const publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                posts: action.payload,
            };
        // case "UPDATE_LIKES":
        //   return {
        //     ...state,
        //     posts: state.posts.map((post) =>
        //       post._id === payload.id
        //         ? {
        //             ...post,
        //             likes: payload.likes,
        //           }
        //         : post
        //     ),
        //   };

        case "SET_PUBLIC_PROFILE":
            return {
                ...state,
                publicProfile: action.payload
            }
        case "SET_FOLLOW_USER":
            state.publicProfile.user.followers = [...action.payload ]   
            return {
                ...state,
            }    
        default:
            return state;
    }
};

export default publicReducer;
