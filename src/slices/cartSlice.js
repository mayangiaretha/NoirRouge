import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
};
//helper function
const addDecimals = (num) => {
    return(Math.round(num * 100).toFixed(2))
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id)
            if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ?item:x)
            }else{
                state.cartItems = [...state.cartItems,item]
            }

        //    calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) =>acc + item.price *item.qty, 0))

        //    calculate shipping price(if orders are above 100 they are for free otherwise $10 for shipping)
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

        //    calculate tax price
            state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));
        //    calculate the total price
            state.totalPrice = addDecimals(
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            )
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
})
export const{ addToCart } = cartSlice.actions

export default cartSlice.reducer