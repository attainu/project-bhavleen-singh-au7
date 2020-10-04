import httpRequest from "../../config/axiosConfig";
import axios from 'axios';

export const setProfile = () => async (dispatch) => {
    try {
        const option = {
            url: "user/me",
            method: "GET",
        };
        const res = await httpRequest(option);
        dispatch({ type: "SET_PROFILE", payload: res.data });
    } catch (e) {
        console.log(e);
    }
};

export const createPost = (data, setuploadingPercentage) => async (dispatch) => {
    try {
        // const uploadOptions = {
        //     onUploadProgress: (progressEvent) => {
        //       const {loaded, total} = progressEvent;
        //       let percent = Math.floor( (loaded * 100) / total )
        //       if( percent < 100 ){
        //         setuploadingPercentage(percent)
        //       }
        //     }
        // }    

        const option = {
            baseURL: process.env.REACT_APP_API,
            method: "POST",
            url: "posts",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                let percent = Math.floor( (loaded * 100) / total )
                if( percent < 100 ){
                  setuploadingPercentage(percent)
                  setuploadingPercentage(percent-10)
                }
                console.log(percent)
            }   
        };
        const res = await axios(option);
        dispatch({ type: "ADD_POST", payload: res.data.data.post })
    } catch (e) {
        console.log(e);
    }
};
