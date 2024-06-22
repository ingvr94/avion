import { addToCart, decreaseItemAmount,  increaseItemAmount } from '@/state/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ListingType } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'



type ProductCardType={
    product:ListingType
}

const ProductCard = ({product}:ProductCardType) => {

    const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")

    const cart=useSelector((state:any)=>state.cart)
    const dispatch=useDispatch()

    const handlePlusAmount=()=>{
        dispatch(increaseItemAmount())
    }

    const handleMinusAmount=()=>{
        dispatch(decreaseItemAmount())
    }

    const handleAddToCart=(product:ListingType)=>{
        dispatch(addToCart(product))
    }


  return (
    isAboveMediumScreen ?

    <div className="flex h-[759px]">
        <img className="h-100" src={product.picture}/>
        <div className="flex flex-col my-[61px] ml-[62px] ">
            <div className="pl-10">
                <div className="pb-[14px]">
                    <div className=" font-clashdisplay text-h1 mb-[13px]">{product.name}</div>
                    <div className="text-h2">£{product.price}</div>
                </div>
                <div className="pt-10 pb-[23px]">
                    <div className=" text-dark-primary text-body_md">Descripiton</div>
                    <div className="text-light-primary text-body_md mt-6 mb-5 w-[498px]">{product.description}</div>
                    <ul className="text-light-primary text-body_md list-disc pl-5">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>
                <div className="pt-5 pb-[15px]">
                    <div className=" text-dark-primary text-body_md pb-7">Dimensions</div>
                    <div className="gap-[57px] flex text-dark-primary ">
                        <div>
                            <div className="pb-3">Height</div>
                            <div>{product.height}cm</div>
                        </div>
                        <div>
                            <div className="pb-3">Width</div>
                            <div>{product.width}cm</div>
                        </div>
                        <div>
                            <div className="pb-3">Depth</div>
                            <div>{product.depth}cm</div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div className="flex text-dark-primary text-body_md">
                        <div className="mt-10 mr-[22px]">Amount:</div>
                        <div className=" bg-light-grey px-4 py-3 mt-[27px]">
                            <button 
                            onClick={()=>handleMinusAmount()}
                            disabled={(cart.cartItemAmount==0 ? true : false)}
                            className="text-border-dark">-
                            </button>
                            <span className="mx-[33px]">
                                {cart.cartItemAmount}
                            </span>
                            <button onClick={()=>handlePlusAmount()} className=" text-border-dark">+</button>
                        </div>
                        <button onClick={()=>{
                            handleAddToCart(product)

                        }
                        } 
                        disabled={(cart.cartItemAmount==0 ? true : false)}
                        className={`bg-dark-primary ${cart.cartItemAmount==0 && ` opacity-70`} absolute px-4 py-3 mt-[27px] ml-[379px] text-white `}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    :
    <div className='flex flex-col mb-[46px]'>
        <img src={product.picture}/>
        <div className='mx-6'>
            <div className="mt-[28px] font-clashdisplay">
                <div className=" text-h3 mb-3">{product.name}</div>
                <div className="text-h4">£{product.price}</div>
            </div>
            <div className="text-dark-primary my-7">
                <div className=" text-h5 font-clashdisplay">Product descripiton</div>
                <div className=" text-body_sm font-satoshi my-3">{product.description}</div>
                <ul className="list-disc text-body_sm font-satoshi ml-6">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                </ul>
            </div>
            <div>
                <div className=" text-dark-primary font-clashdisplay text-h5 mb-[16px]">Dimensions</div>
                <div className="flex text-dark-primary">
                    <div className=' border-r-[1px] pr-[51.5px]'>
                        <div className='text-h6 font-clashdisplay pb-[15px]'>Height</div>
                        <div className='font-satoshi text-body_sm'>{product.height}cm</div>
                    </div>
                    <div className='border-r-[1px] px-[51.5px]'>
                        <div className='text-h6 font-clashdisplay pb-[15px]'>Width</div>
                        <div className='font-satoshi text-body_sm'>{product.width}cm</div>
                    </div>
                    <div className='pl-[51.5px]'>
                        <div className='text-h6 font-clashdisplay pb-[15px]'>Depth</div>
                        <div className='font-satoshi text-body_sm'>{product.depth}cm</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-8 text-dark-primary'>
                <div className="font-clashdisplay text-h5 ">Quantity</div>
                <div className="flex justify-center bg-light-grey px-4 py-3 mt-3 mb-4">
                    <button 
                    onClick={()=>handleMinusAmount()}
                    disabled={(cart.cartItemAmount==0 ? true : false)}
                    className="text-border-dark">-
                    </button>
                    <span className="mx-[33px]">
                        {cart.cartItemAmount}
                    </span>
                    <button onClick={()=>handlePlusAmount()} className=" text-border-dark">+</button>
                </div>
                <button onClick={()=>{
                    handleAddToCart(product)
                }
                } 
                disabled={(cart.cartItemAmount==0 ? true : false)}
                className={`bg-dark-primary ${cart.cartItemAmount==0 && ` opacity-70`} py-4 text-white `}>Add to cart</button>
            </div>

        </div>
       
    </div>
  )
}

export default ProductCard