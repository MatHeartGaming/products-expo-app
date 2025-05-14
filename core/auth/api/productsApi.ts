import axios from 'axios';
import { Platform } from 'react-native';

const STAGE = process.env.EXPO_PUBLIC_STAGE || 'DEV';

export const API_URL =
    (STAGE === 'prod')
        ? process.env.EXPO_PUBLIC_API_URL
        : (Platform.OS === 'ios')
            ? process.env.EXPO_PUBLIC_API_URL_IOS
            : process.env.EXPO_PUBLIC_API_URL_ANDROID;

console.log({STAGE, [Platform.OS]: API_URL})

// TODO: Conectar mediante env vars, Android, iOS
const productsApi = axios.create({
    baseURL: API_URL
})


// Interceptors


export { productsApi };

