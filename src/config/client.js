
import axios from "axios";

export const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const instance = axios.create({
    baseURL,
    headers: {
        common: {
            "Content-Type": "application/json",
        },
    },
});
