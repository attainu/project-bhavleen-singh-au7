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
            localStorage.setItem('access_token', res.data.token);
            localStorage.setItem('user_info', JSON.stringify(res.data.user));
            dispatch({ type: 'SET_LOGIN_SUCCESS', payload: res.data.user })
            
        } catch(e) {
            dispatch({ type: 'SET_LOGIN_ERROR', payload: e.response.data.error})
        }
    };
};

export const setUserSignout = () => {
    return async (dispatch) => {
        try {
            const option = {
                url: "user/logout",
                method: "GET",
            };
            const res = await httpRequest(option);
            localStorage.removeItem('access_token')
            localStorage.removeItem('user_info')
            dispatch({ type: 'SET_LOGOUT_SUCCESS' })
            console.log('Hhhhhh')
            window.location.href = '/';
        } catch(e) {
            console.log(e)
        }
    }
}
