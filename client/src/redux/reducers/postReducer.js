const initialState = {
  posts: null,
  // post: null,
};

const postReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default postReducer;
