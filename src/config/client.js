
import axios from "axios";

export const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const PRODUCTS_URL = "/api/products";
export const ORDERS_URL = "/api/orders";
export const USERS_URL = "/api/users";
export const PAYPAL_URL = "/api/config/paypal";



export const instance = axios.create({
    baseURL,
    headers: {
        common: {
            "Content-Type": "application/json",
        },
    },
});
