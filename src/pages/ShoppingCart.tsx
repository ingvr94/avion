import Footer from "@/scenes/footer"
import Navbar from "@/scenes/navbar"
import { ListingType } from "@/shared/types"
import {  useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, getTotals, increaseQuantity} from '@/state/cart/cartSlice'
import { useEffect } from "react"
import useMediaQuery from '@/hooks/useMediaQuery'



const ShoppingCart = () => {

    const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")

    const cart=useSelector((state:any)=>state.cart)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])

    const handleDecreaseCart=(cartItem:ListingType)=>{
        dispatch(decreaseQuantity(cartItem))
    }

    const handleIncreaseCart=(cartItem:ListingType)=>{
        dispatch(increaseQuantity(cartItem))
    }


  return (
    <div className='app container'>
        <Navbar />
        { isAboveMediumScreen ?
        <div className="text-dark-primary pt-16 px-[188px] bg-light-grey ">
            <div className=" text-h1 pb-12 font-clashdisplay">Your shopping cart</div>
            {cart.cartItems.length === 0 ? (
                <div className="flex justify-center text-h4 h-[309px]">
                    <p>Your cart is currently empty.</p>
                </div>
            )
            : (
                <div className="w-[1060px] text-dark-primary">
                    <div className="flex font-clashdisplay text-h6 pb-3 font-normal">
                        <div className="mr-[595px]">Product</div>
                        <div className="mr-[317px]">Quantity</div>
                        <div>Total</div>
                    </div>
                    <div>
                        {cart.cartItems?.map((cartItem:ListingType)=>(
                            <div className="flex border-t-[1px] border-b-[1px] border-grey  pt-5 pb-8" key={cartItem.id}>
                                <div className="flex ">
                                    <img className="w-[109px] h-[134px]" src={cartItem.picture} alt={cartItem.name}/>
                                    <div className="ml-[21px] gap-2 ">
                                        <div className="text-h4 font-clashdisplay ">{cartItem.name}</div>
                                        <div className="w-[179px] font-satoshi text-body_sm ">{cartItem.description?.slice(0,cartItem.description?.indexOf('.'))}.</div>
                                        <div className="font-satoshi text-body_md ">£{cartItem.price}</div>
                                    </div>
                                </div>
                                <div className="flex w-[122px] ml-[341px]">
                                    <button onClick={()=>handleDecreaseCart(cartItem)} className="w-[7px] h-[22px] text-body_md text-border-grey">-</button>
                                    <div className="font-satoshi text-body_md px-[33px]">{cartItem.cartQuantity}</div>
                                    <button onClick={()=>handleIncreaseCart(cartItem)} className="w-[11px] h-[22px] text-body_md text-border-grey">+</button>
                                </div>
                                
                                {cartItem.cartQuantity && <div className="py-3 ml-[252px] font-satoshi text-body_lg text-dark-primary">£{cartItem.price * cartItem.cartQuantity}</div>}
                            </div>
                        ))}
                        <div className="mt-6 flex flex-col items-end">
                                <div className="flex items-center">
                                    <div className="text-h4 text-primary">Subtotal</div>
                                    <div className="text-h3 ml-5">£{cart.cartTotalAmount}</div>
                                </div>
                                <div className=" text-body_sm font-satoshi text-primary pt-3 pb-4">Taxes and shipping are calculated at checkout</div>
                                <button className="py-4 px-8 bg-dark-primary text-white mb-12">Go to checkout</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="absolute bottom-0">

            </div>
        </div>
        :
        <div className="text-dark-primary px-6 bg-light-grey flex flex-col ">
              <div className=" text-h3 mt-10 mb-9 font-clashdisplay">Your shopping cart</div>
              {cart.cartItems.length === 0 ? (
                <div className="flex justify-center">
                    <p>Your cart is currently empty</p>
                </div>
            )
            : (
                <div className=" text-dark-primary">
                    <div className="border-b-[1px] pb-[6px]">
                        {cart.cartItems?.map((cartItem:ListingType)=>(
                            <div className="flex" key={cartItem.id}>
                                <div className="flex h-[166px] gap-[22px] mb-7">
                                    <img className="w-[133px] h-full" src={cartItem.picture} alt={cartItem.name}/>
                                    <div>
                                        <div className="text-h5 font-clashdisplay">{cartItem.name}</div>
                                        <div className="font-satoshi text-body_sm my-2">{cartItem.description?.slice(0,cartItem.description?.indexOf('.'))}.</div>
                                        <div className="font-satoshi text-body_md ">£{cartItem.price}</div>
                                        <div className="flex justify-between px-3 py-4 w-[122px] text-body_md">
                                            <button onClick={()=>handleDecreaseCart(cartItem)} className="text-border-grey">-</button>
                                            <div className="font-satoshi">{cartItem.cartQuantity}</div>
                                            <button onClick={()=>handleIncreaseCart(cartItem)} className=" text-border-grey">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="mt-4 flex flex-col ">
                                <div className="flex flex-col items-end ">
                                    <div className="flex items-center">
                                        <div className="text-h4 text-primary">Subtotal</div>
                                        <div className="text-h3 ml-4">£{cart.cartTotalAmount}</div>
                                    </div>
                                    <div className=" text-body_sm font-satoshi text-primary  ">Taxes and shipping are calculated at checkout</div>
                                </div>
                                <button className="py-4 px-8 mt-9 mb-[55px] bg-dark-primary text-white">Go to checkout</button>
                        </div>
                </div>
            )}

        </div>
        }
        <Footer />     

    </div>
  )
}

export default ShoppingCart