import Image from '@/assets/Image.png'
import ImageTwo from '@/assets/Image-2.png'
import {motion} from 'framer-motion'

type Props={
  isPictureRight:boolean
}


const Features = ({isPictureRight}:Props) => {
  return (
    isPictureRight ?
    <div className="md:grid md:grid-cols-2 ">
        <div className="md:pt-[72px] md:pr-[100px] md:pl-[84px] xs:pt-12 xs:px-6 xs:flex xs:flex-col">
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2, duration:0.5}}
              variants={{
                  hidden:{opacity:0, x:-50},
                  visible:{opacity:1,x:0}
              }}
             className="font-clashdisplay md:text-h3 md:w-[514px] text-dark-primary xs:w-[274px] xs:text-h4">From a studio in London to a global brand with over 400 outlets
            </motion.div>
            <motion.p 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1,x:0}
            }}
            className='md:pt-[25px] md:pb-[196px] md:text-body_md xs:pt-3 xs:pb-16 xs:text-body_sm '>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/><br/>
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </motion.p>
            <button className=' bg-light-grey px-8 py-4 xs:mb-[38px] md:w-[170px] md:mb-0 text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey'>Get in touch</button>
        </div>
        <img className='h-100 ' src={Image} alt="Feature image" />
       
    </div>
    :
    <div className="md:grid md:grid-cols-2 ">
      <img className='h-full' src={ImageTwo} alt="Feature image" />    
      <div className="md:pt-[72px] md:pr-[100px] md:pl-[84px] xs:pt-12 xs:px-6 xs:flex xs:flex-col">
          <div className="font-clashdisplay md:text-h3 md:w-[514px] text-dark-primary xs:w-[274px] xs:text-h4">Our service isn’t just personal, it’s actually
          hyper personally exquisite</div>
          <p className='md:pt-[25px] md:pb-[196px] md:text-body_md xs:pt-3 xs:pb-16 xs:text-body_sm '>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/><br/>
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className=' bg-light-grey px-8 py-4 xs:mb-[38px] md:w-[170px] md:mb-0 text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey'>Get in touch</button>
      </div>
    </div>
  )
}

export default Features