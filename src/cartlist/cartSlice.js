import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cartData: [],
    cartTotal: 0
}

export const cartSlice = createSlice({
    name: 'cartlist',
    initialState,
    reducers: {
        addToCart: (state, action) => {
          let total = 0
         

           let temp = [...state.cartData, action.payload]
        //    add to cart total
        
           temp.map((item)=>{
             total += item.price
           })

           state.cartData = temp
           state.cartTotal = total
           
            
        },
        cartmange: (state, action) => {
            console.log(action.payload)
        },

    },
})


// Action creators are generated for each case reducer function
export const { addToCart, cartmange } = cartSlice.actions

export default cartSlice.reducer