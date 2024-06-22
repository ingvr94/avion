import NewCeramicsItem from './NewCeramicsItem'
import {ListingType} from '@/shared/types'
import storeItems from '@/data/items.json'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

type NewCeramicsType={
  heading:string
}

const container ={
  hidden:{},
  visible:{
      transition:{staggerChildren:0.2}
  }
}


const NewCeramics = ({heading}:NewCeramicsType) => {
  return (
    <div className=" md:mx-20 xs:mx-6 flex flex-col md:pt-20  md:pb-14 xs:pt-12 xs:pb-[38px]">
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2, duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1,x:0}
        }}
        className='font-clashdisplay md:text-h2 xs:text-h4 text-dark-primary pb-8'>{heading}</motion.div>
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        variants={container}
        className='grid md:grid-cols-4 xs:grid-cols-2 xs:gap-4 md:gap-5'>
            {storeItems.map((element:ListingType)=>(
              (element.id == 2 || element.id>=4 && element.id<=6) &&
              <Link to={`/listing/${element.id-1}`}>
                <NewCeramicsItem
                id={element.id}
                picture={element.picture}
                name={element.name}
                price={element.price}
                />
              </Link>

            ))}
        </motion.div>
        <div className="w-full flex justify-center mt-[35px]">
        <Link to='/productlistings'>
          <button className=" bg-light-grey px-8 py-4 xs:w-[342px] md:w-[170px] text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey">
                  View collection    
          </button>
        </Link> 
        </div>
        
    </div>
  )
}

export default NewCeramics