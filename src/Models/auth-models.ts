export type UserModel = {
    _id?: number;
    googleId: string
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    image: string;
    accessToken: string;
}