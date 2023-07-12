export const addDecimals = (num) => {
    return(Math.round(num * 100).toFixed(2))
}


export const updateCart = (state) =>{
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
    return state

}

