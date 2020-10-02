import httpRequest from "../../config/axiosConfig";

export const setPublicPosts = () => async (dispatch) => {
    try {
        const option = {
            url: "posts",
            method: "GET",
        };
        const res = await httpRequest(option);
        dispatch({ type: "SET_POSTS", payload: res.data })
    } catch(e) {
        console.log(e)
    }
};
    