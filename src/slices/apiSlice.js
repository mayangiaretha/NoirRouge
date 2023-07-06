import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseURL} from "../config/client.js";

const baseQuery = fetchBaseQuery({baseUrl:baseURL})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['Product', 'order', 'User'],
    endpoints:(builder) => ({
    })
})