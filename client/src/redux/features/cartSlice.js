import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           let itemIndex = state.cart.findIndex((item)=>item.id===action.payload.id)
        //    console.log(itemIndex);
           if(itemIndex>=0){
            state.cart[itemIndex].qnty+=1
           }else{
            let temp = {...action.payload,qnty:1}
            // console.log(temp);
            state.cart.push(temp)
           }
        //    console.log(state.cart);
        },
        removeFromCart:(state,action)=>{
            let itemIndex = state.cart.findIndex((item)=>item.id===action.payload)
            if(state.cart[itemIndex].qnty>1){
                state.cart[itemIndex].qnty-=1
            }else{
                state.cart=state.cart.filter((item)=>item.id!==action.payload)
            } 
        },
        trash:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload)
        },
        clearCart:(state)=>{
            state.cart=[]
        }
    }
})

export const {addToCart,removeFromCart,trash,clearCart} = cartSlice.actions;

export default cartSlice.reducer;