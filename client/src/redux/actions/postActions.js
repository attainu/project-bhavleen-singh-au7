import httpRequest from "../../config/axiosConfig";

export const setPublicPosts = () => async (dispatch) => {
  try {
    const option = {
      url: "posts",
      method: "GET",
    };
    const res = await httpRequest(option);
    dispatch({ type: "SET_POSTS", payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const option = {
      url: `posts/like/${id}`,
      method: "PUT",
    };

    const res = await httpRequest(option);

    dispatch({
      type: "UPDATE_LIKES",
      payload: { id, likes: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};
