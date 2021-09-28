import { StringMappingType } from "typescript";

export const signIn = (email: string, password: string) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication failed!";
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }

                    console.log(errorMessage);
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            console.clear();
            console.log(data.idToken.split(".")[1].account);
            console.log(data.idToken);
            const isAdmin =
                JSON.parse(atob(data.idToken.split(".")[1])).account[0].role ===
                "admin";

            //
            console.log("isAdmin=" + isAdmin);

            localStorage.setItem("token", data.idToken);
            //dispatch(authActions.login(data.idToken));
            // history.replace("/");
        })
        .catch((err) => {
            alert(err.message);
        });
}

export const signUp = (email: string, password: String, errorHander: any) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            //setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication failed!";
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }

                    console.log(errorMessage);
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            console.log(data.idToken);
            const isAdmin =
                JSON.parse(atob(data.idToken.split(".")[1])).account[0].role ===
                "admin";

            //
            console.log("isAdmin=" + isAdmin);

            localStorage.setItem("token", data.idToken);
            // dispatch(authActions.login(data.idToken));
            // history.replace("/");
        })
        .catch((error) => {

            console.log("error code " + error.code);

            errorHander(error)
        });

}

export const sendResetPassword = (email: string) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;

    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            requestType: 'PASSWORD_RESET',
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

}


