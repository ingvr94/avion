import {TbTruckDelivery} from 'react-icons/tb'
import { IconContext } from "react-icons";
import {XMarkIcon} from "@heroicons/react/24/outline"
import {  useState } from "react";
import Navbar from '@/scenes/navbar';
import NavListing from '@/scenes/navListing';
import ProductCard from '@/scenes/productCard';
import NewCeramics from '@/scenes/newCeramics';
import Benefits from '@/scenes/benefits'
import SignUp from '@/scenes/signup'
import Footer from '@/scenes/footer'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useParams } from 'react-router-dom';
import { ListingType } from '@/shared/types';

type ProductType={
    items:Array<ListingType>
}

const Listing = ({items}:ProductType) => {
    const [banner,closeBanner]=useState(true)
    const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")

    type ParamsType={
        id:string
    }

   const {id}=useParams<ParamsType>();

   const prodId=Number(id)

   const product=items.find((item)=>item.id===prodId+1)

   if (product===undefined) {
    throw new TypeError('ID of searched product was not found')
   }

  return (
    <div className="app container">
    { banner &&
        <div className='md:h-[41px] xs:h-[54px] bg-dark-primary text-white flex items-center md:justify-center xs:pl-4'>
            <IconContext.Provider value={{size:'16'}}>
                <>
                <TbTruckDelivery />  
                <div className='text-body_sm ml-2 xs:w-[318px] md:w-[407px]'>Free delivery on all orders over £50 with code easter checkout</div>
                </>
            </IconContext.Provider>
            <XMarkIcon className='h-6 w-6 absolute right-[9px] cursor-pointer'
            onClick={()=>closeBanner(false)}/>
        </div>
    }
        {isAboveMediumScreen ? <NavListing /> : <Navbar />}
        <ProductCard product={product}/>
        <NewCeramics heading={'You might also like'}/>
        <Benefits />
        <SignUp />
        <Footer />
    </div>
  )
}

export default Listing