import cookie from "js-cookie";

// Set in cookie
export const setCookie = (key, value) => {
    if (window !== "undefined") {
        cookie.set(key, value, {
            expires: 1,
        });
    }
};

// Remove from cookie
export const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

// Get from cookie such as stored token
// and it will be useful when we need to make request to server with token
export const getCookie = (key) => {
    if (window !== "undefined") {
        return cookie.get(key);
    }
};

// Set in LocalStorage
export const setLocalStorage = (key, value) => {
    if (window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from LocalStorage
export const removeLocalStorage = (key) => {
    if (window !== "undefined") {
        localStorage.removeItem(key);
    }
};

// Authenticate user by passing data to cookie and LocalStorage during Signin
export const authenticate = (response, next) => {
    // console.log(
    //   "AUTHENTICATE HELPER ON SIGNIN RESPONSE",
    //   response
    // );
    setCookie("token", response.data.token);
    setLocalStorage("user", response.data.user);
    next();
};

// Access user info from LocalStorage
//to protect our app fro CSRF attack
export const isAuth = () => {
    if (window !== "undefined") {
        const cookieChecked = getCookie("token");
        if (cookieChecked) {
            if (localStorage.getItem("user")) {
                return JSON.parse(localStorage.getItem("user"));
            } else {
                return false;
            }
        }
    }
};

export const signout = (next) => {
    removeCookie("token");
    removeLocalStorage("user");
    next();
};

export const updateUser = (response, next) => {
    //   console.log(
    //     "UPDATE USER IN LOCAL STORAGE HELPERS",
    //     response
    //   );
    if (typeof window !== "undefined") {
        let auth = JSON.parse(localStorage.getItem("user"));
        auth = response.data;
        localStorage.setItem("user", JSON.stringify(auth));
    }
    next();
};
