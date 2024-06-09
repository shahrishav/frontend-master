import axios from "axios";

//creating backend configuration

const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

//make a config for token
const config = {
    headersv: {
        'authorization': `Bearer ${localStorage.getItem('token')}`ç
    }
}

//Test Api
export const testApi = () => Api.get('/test');

// Register API
export const registerUserApi = (data) => Api.post('/api/user/create', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//Addproduct API
export const createProductApi = (data) => Api.post('/api/product/create', data)

// get all products api
export const getAllProducts = () => Api.get('/api/product/get_all_products', config)

// get single product
export const getSingleProduct = (id) => Api.get(`/api/product/get_single_product/${id}`, config)

// get delete
export const deleteProduct = (id) => Api.delete(`/api/product/delete_product/${id}`)

//get update
export const updateProduct = (id, data) => Api.put(`/api/product/update_product/${id}`, data)

//http://localhost:5500/test