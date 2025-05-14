import { productsApi } from "../api/productsApi";
import { User } from "../interfaces/user";

export interface AuthResponse {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    token:    string;
}

const returnUserToToken = (data: AuthResponse): {
    user: User,
    token: string,
} => {
    const { id, email, fullName, isActive, roles, token } = data;

    const user: User = {
        id, 
        email, 
        fullName, 
        isActive, 
        roles
    }

    return {
        user, 
        token,
    }
}

export const authLogin = async (email: string, password: string) => {
    email = email.toLowerCase();

    try {
        const {data} = await productsApi.post<AuthResponse>('auth/login', {
            email, password
        });

        return returnUserToToken(data);
    } catch(error) {
        throw new Error('Login error ' + error);
    }
}

export const authCheckStatus = async () => {

    try {
        const {data} = await productsApi.get<AuthResponse>('auth/check-status')

        return returnUserToToken(data);
    } catch(error) {
        throw new Error('Check Status error ' + error);   
    }

}