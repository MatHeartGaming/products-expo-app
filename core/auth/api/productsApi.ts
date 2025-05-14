import axios from 'axios'


// TODO: Conectar mediante env vars, Android, iOS
const productsApi = axios.create({
    baseURL: 'localhost:3000/api'
})


// Interceptors


export { productsApi }
