export type TokenModel = {
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
}

export type UserModel = {
    _id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
}