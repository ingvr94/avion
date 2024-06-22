import {CheckCircleIcon,CreditCardIcon} from "@heroicons/react/24/outline"
import {LuSprout} from 'react-icons/lu'
import {TbTruckDelivery} from 'react-icons/tb'
import Benefit from "./Benefit"
import { motion } from "framer-motion"


interface BenefitType{
    icon:JSX.Element
    title:string
    description:string
}

const Benefits = () => {

  const benefits:Array<BenefitType>=[
    {
        icon: <TbTruckDelivery className="h-6 w-6" />,
        title:'Next day as standard',
        description:'Order before 3pm and get your order the next day as standard'
    },
    {
        icon: <CheckCircleIcon className="h-6 w-6" />,
        title:'Made by true artisans',
        description:'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        icon: <CreditCardIcon className="h-6 w-6" />,
        title:'Unbeatable prices',
        description:'For our materials and quality you won’t find better prices anywhere'
    },
    {
        icon: <LuSprout className="h-6 w-6" />,
        title:'Recycled packaging',
        description:'FWe use 100% recycled packaging to ensure our footprint is manageable'
    },
  ]

  return (
    <section
    id='benefits'
    className=' md:pb-[86px] md:mx-20 xs:mx-6 xs:pt-[60px] xs:pb-[45px] '>
      <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2, duration:0.5}}
        variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity:1,y:0}
        }}
      className=' font-clashdisplay md:w-auto md:text-h3 md:mb-[51px] xs:text-h4 xs:w-[274px] flex justify-center'>What makes our brand different
      </motion.div> 
        <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                transition={{delay:0.5, duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1,y:0}
                }}
        className="md:flex md:justify-center md:gap-[59px]">
            {benefits.map((benefit:BenefitType)=>(
                <Benefit 
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}/>
            ))}
        </motion.div>
      
    </section>
  )
}

export default Benefits