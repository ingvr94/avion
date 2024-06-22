import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

interface CartItemsType {
    id:number
    price:number
    cartQuantity:number
}

interface CounterState {
    cartItems:CartItemsType[]
    cartItemAmount:number
    cartTotalQuantity:number
    cartTotalAmount:number
}

const initialState: CounterState={
    cartItems:localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '""') 
    : [],
    cartItemAmount:0,
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        increaseItemAmount(state) {
            state.cartItemAmount+=1
        },
        decreaseItemAmount(state) {
            state.cartItemAmount-=1
        },

       addToCart(state,action) {
        const itemIndex=state.cartItems.findIndex((item)=> item.id === action.payload.id)
       

        if (itemIndex == -1) {
            const tempProduct={...action.payload,cartQuantity:state.cartItemAmount}
            state.cartItems.push(tempProduct)
            toast.success(`${state.cartItemAmount} items added to cart` ,{
                position:'bottom-left'
            })
        }

        else {
           
            state.cartItems[itemIndex].cartQuantity+=state.cartItemAmount
            
            toast.success(`${state.cartItemAmount} items added to cart` ,{
                position:'bottom-left'
            })
               }

         state.cartItemAmount=0
  
           localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
            
       
       increaseQuantity(state,action) {
        const itemIndex=state.cartItems.findIndex((item)=> item.id === action.payload.id)
        if (itemIndex >=0 ) {
           state.cartItems[itemIndex]={
            ...state.cartItems[itemIndex],
            cartQuantity:state.cartItems[itemIndex].cartQuantity+1
           }
    } 
        else {
            const tempProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct)
        }

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
       },

       decreaseQuantity(state,action) {
        const itemIndex=state.cartItems.findIndex((item)=> item.id === action.payload.id)
        

        if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity-=1
        }

        else if (state.cartItems[itemIndex].cartQuantity === 1) {

            const nextCartItems = state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)
            state.cartItems = nextCartItems

        }
       
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
       },

       getTotals(state) {
           let {total,quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity}=cartItem
                const itemTotal=price * cartQuantity

                cartTotal.total +=itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },{
                total:0,
                quantity:0
            })

        state.cartTotalQuantity=quantity
        state.cartTotalAmount=total
       }

    }
})

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    increaseItemAmount,
    decreaseItemAmount,
    getTotals} = cartSlice.actions


export default cartSlice.reducer