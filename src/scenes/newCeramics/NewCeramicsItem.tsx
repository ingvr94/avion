import {ListingType} from '@/shared/types'
import {motion} from 'framer-motion'

const childVariant={
  hidden:{opacity:0, scale:0.9},
  visible:{opacity:1, scale:1}
}


const NewCeramicsItem = ({id,picture,name,price}: ListingType) => {
  return (
    <motion.div
      variants={childVariant}
         key={id}>
        <img className="md:h-[375px] md:w-[305px] xs:h-[201px] xs:w-[163px] transition ease-in-out duration-300 md:hover:scale-105" src={picture} alt="Item's picture" />
        <div className="gap-2 pt-6">{name}</div>
        <div className="gap-2 pt-2">£{price}</div>
    </motion.div>
  )
}

export default NewCeramicsItem