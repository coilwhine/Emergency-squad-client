import { UserModel } from "../Models/auth-models";

export async function aouthentication(userDataString: string) {
    console.log("authenticated");

    if (userDataString) {
        try {
            const userData: UserModel = JSON.parse(userDataString);

            const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${userData.accessToken}`);

            if (response.status === 200) {
                return true;
            } else {
                window.localStorage.removeItem('squadUserData');
                return false;
            }

        } catch (error) {
            console.error(error);
            window.localStorage.removeItem('squadUserData');
            return false;
        }
    }
}