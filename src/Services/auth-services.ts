class AuthServices {

    async getUserById(id: string) {
        try {
            const user = await fetch("http://localhost:3001/user/");

            const result = await user.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }

}

const authServices = new AuthServices();
export default authServices;