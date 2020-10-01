import httpRequest from "../../config/axiosConfig";

export const setUserLogin = (userData) => {
    return async (dispatch) => {
        try {
            const option = {
                data: userData,
                url: "user/login",
                method: "POST",
            };
            const res = await httpRequest(option);
            console.log(res.data);
            localStorage.setItem('access_token', res.data.token);
            localStorage.setItem('user_info', JSON.stringify(res.data.user));
            dispatch({ type: 'SET_USER_SUCCESS', payload: res.data.user })
            
        } catch (e) {
            dispatch({ type: 'SET_USER_ERROR', payload: e.response.data.error})
        }
    };
};
