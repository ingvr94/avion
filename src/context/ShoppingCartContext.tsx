// import { ReactNode, createContext, useContext, useState } from "react";


// type ShoppingCartContextProps = {
//     children:ReactNode
// }

// type ShoppingCartContext={

//     getItemQuantity:(id:number)=>number
//     increaseCartQuantity:(id:number)=>void
//     decreaseCartQuantity:(id:number)=>void
//     removeFromCart:(id:number)=>void
//     cartQuantity:number
//     cartItems:CartItem[],
//     itemsToCart:number,
//     sendToCart:(quantity:number)=>void
// }

// type CartItem ={
//     id:number
//     quantity:number
// }

// const ShoppingCartContext=createContext({} as ShoppingCartContext)

// export function useShoppingCart() {
//     return useContext(ShoppingCartContext)
// }


// export function ShoppingCartProvider({children}:ShoppingCartContextProps) {
//     const [cartItems,setCartItems]=useState<CartItem[]>([])
//     const [itemsToCart,setItemsToCard]=useState<number>(0)

//     const cartQuantity=cartItems.reduce(
//         (quantity,item)=>item.quantity+quantity,0
//     )

//     function getItemQuantity(id:number) {
//         return cartItems.find(item=>item.id===id)?.quantity || 0
//     }

//     function increaseCartQuantity(id:number) {
//         setCartItems(currItems=>{
//             if (currItems.find(item=>item.id === id)==null) {
//                 return [...currItems,{id,quantity:1}]
//             } else {
//                 return currItems.map(item =>{
//                     if (item.id === id) {
//                         return {...item,quantity:item.quantity+1}
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     function decreaseCartQuantity(id:number) {
//         setCartItems(currItems=>{
//             if (currItems.find(item=>item.id === id)?.quantity === 1) {
//                 return currItems.filter(item=>item.id!==id)
//             } else {
//                 return currItems.map(item =>{
//                     if (item.id === id) {
//                         return {...item,quantity:item.quantity-1}
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     function removeFromCart(id:number) {
//         setCartItems(currItems => {
//             return currItems.filter(item=>item.id!==id)
//         })
//     }

//     function sendToCart(quantity:number) {
//         return setItemsToCard(quantity)
//     }


//     return (
//         <ShoppingCartContext.Provider value={{
//             getItemQuantity,
//             increaseCartQuantity,
//             decreaseCartQuantity,
//             removeFromCart,
//             cartItems,
//             cartQuantity,
//             itemsToCart,
//             sendToCart}}>
//             {children}
//         </ShoppingCartContext.Provider>
//     )
// }