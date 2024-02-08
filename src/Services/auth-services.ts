import { UserModel } from "../Models/auth-models";

class AuthServices {

    async getUserById(id: string) {
        try {
            const user = await fetch(`http://localhost:3001/user/userid/${id}`);

            const result = await user.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }

    async loginUserToDB(userData: UserModel) {

        await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log('Success:', data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }

}

const authServices = new AuthServices();
export default authServices;