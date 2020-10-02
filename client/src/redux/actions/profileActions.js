import httpRequest from "../../config/axiosConfig";

export const setProfile = () => async (dispatch) => {
    try {
        const option = {
            url: "user/me",
            method: "GET",
        };
        const res = await httpRequest(option)
        console.log(res)
        dispatch({ type: "SET_PROFILE", payload: res.data})     
    } catch(e) {
        console.log(e)
    } 
};
