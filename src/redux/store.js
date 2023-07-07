  import { configureStore } from "@reduxjs/toolkit"
  import { apiSlice} from "../slices/apiSlice.js";
import CartSliceReducer from "../slices/cartSlice.js";

  export const store = configureStore({
      reducer:{
          [apiSlice.reducerPath]:apiSlice.reducer, cart: CartSliceReducer,
          devtools: true,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
      devTools:true,
  })