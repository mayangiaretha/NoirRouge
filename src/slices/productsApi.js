import { PRODUCTS_URL} from "../config/client.js";
import { apiSlice } from "./apiSlice.js"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getAllProducts: builder.query({
            query:() => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor:5
        }),
        getAProductById: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            transformResponse: (response) => response,
            keepUnusedDataFor:5
        })
    }),
})
export const{ useGetAllProductsQuery, useGetAProductByIdQuery } = productsApiSlice