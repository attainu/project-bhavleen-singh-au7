const initialState = {
  posts: null,
  publicProfile: null,
};

const publicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: payload,
      };
    case "UPDATE_LIKES":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id
            ? {
                ...post,
                likes: payload.likes,
              }
            : post
        ),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        post: {
          ...state.post,
          comments: payload,
        },
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
      };
    default:
      return state;
  }
};

export default publicReducer;
