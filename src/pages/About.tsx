import {TbTruckDelivery} from 'react-icons/tb'
import { IconContext } from "react-icons";
import {XMarkIcon} from "@heroicons/react/24/outline"
import { useState } from 'react';
import NavAbout from '@/scenes/navAbout';
import Features from '@/scenes/features'
import Benefits from '@/scenes/benefits';
import SignUp from '@/scenes/signup';
import Footer from '@/scenes/footer';
import ScrollToTop from 'react-scroll-to-top'
import { ArrowUpIcon } from "@heroicons/react/24/solid"



const About = () => {
    const [banner,closeBanner]=useState(true)
  return (
    <div className='app bg-white'>
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
        <div className="container">
        <NavAbout />
        <ScrollToTop className='flex justify-center items-center' smooth component={<ArrowUpIcon className='h-6 w-6 text-dark-primary' />}/>
            <div className='flex justify-center'>
                <div className='font-clashdisplay md:w-[704px] md:text-h1 md:pt-[67px] md:pb-[79px] md:text-center 
                xs:w-[342]px] xs:text-h2 xs:py-8 xs:pl-6'>A brand built on the love of craftmanship,
                quality and outstanding customer service
                </div>
            </div>
            <Features isPictureRight={true}/>
            <Features isPictureRight={false}/>
            <Benefits />
            <SignUp />
            <Footer />
        </div>
    </div>
  )
}

export default About