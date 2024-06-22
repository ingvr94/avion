import {ListingType} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import PopularProductsItem from './PopularProductsItem'
import storeItems from '@/data/items.json'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


const PopularProducts = () => {
const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")

const container ={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
  }
  return (
    <section className=" md:mx-20 xs:px-6 flex flex-col md:pt-16 md:pb-12 xs:pb-[38px]">
        <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2, duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1,x:0}
        }} 
        className='font-clashdisplay md:text-h2 xs:text-h4 text-dark-primary pb-8'>Popular products</motion.div>
        {isAboveMediumScreen ?
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            variants={container}
            className='grid grid-cols-4 gap-6'
            >
                {storeItems.map((e:ListingType)=>(
                  (e.id<=4) &&
                  <Link to={`/listing/${e.id-1}`}>
                    <PopularProductsItem
                    id={e.id}
                    picture={e.picture}
                    name={e.name}
                    price={e.price}/>
                  </Link>
                ))}
            </motion.div>
        :
        <>
            <div className=' inline-grid grid-flow-col overflow-x-auto overflow-y-hidden gap-5'>
                {storeItems.map((e:ListingType)=>(
                   (e.id>=4 && e.id<=7) &&
                   <Link to={`/listing/${e.id-1}`}>
                        <PopularProductsItem 
                        id={e.id}
                        picture={e.picture}
                        name={e.name}
                        price={e.price}/>
                   </Link>
                ))}
            </div>
        </>}
        <div className="flex justify-center mt-[35px]">
          <Link to='/productlistings'>
          <button className=" bg-light-grey px-8 py-4 xs:w-[342px] md:w-[170px] text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey">
                View collection
        </button>
          </Link>
        
    </div>
    
</section>
  )
}

export default PopularProducts