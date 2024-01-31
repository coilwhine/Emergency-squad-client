class SquadsServices {

    async getAllSquads() {

        try {
            const allSquads = await fetch("http://localhost:3001/squad/all");
            const result = await allSquads.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }

}

const squadsServices = new SquadsServices();
export default squadsServices;