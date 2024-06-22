import RightImg from '@/assets/Right Image.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


const Hero = () => {
const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
  return (
    <section id='hero'>
    {isAboveMediumScreen ?
        <div className=' bg-dark-primary h-[584px] w-[1280px] mt-[60px] mb-[120px] mx-20 relative'>
                <motion.div className=" absolute top-14 left-14">
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1,x:0}
                    }}
                    className="text-h2 text-white font-clashdisplay font-normal">
                    The furniture brand for the <br /> future, with timeless designs
                    </motion.div>
                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1,x:0}
                    }}
                    >
                        <Link to='/productlistings'>
                        <button className='px-8 py-4 border-none bg-opacity-[15%] bg-light-grey mt-[41px] transition duration-300 hover:bg-opacity-[30%]'>
                            <div className='text-white'>
                                View collection 
                            </div>
                        </button>
                        </Link>
                    </motion.div>

                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.8, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1,x:0}
                    }}
                     className='text-body_lg text-white mt-[196px]'>
                        A new era in eco friendly furniture with Avelon, the French luxury retail brand<br/>
                        with nice fonts, tasteful colors and a beautiful way to display things digitally<br/> 
                        using modern web technologies.
                    </motion.div>
                </motion.div>
                <img className="absolute h-full right-0" src={RightImg} alt=""/>
        </div>
    :
    <>
    <motion.div className=' bg-dark-primary h-[502px] w-100 mt-[69px]'>
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{once:true,amount:0.5}}
         transition={{delay:0.2, duration:0.5}}
         variants={{
             hidden:{opacity:0, x:-50},
             visible:{opacity:1,x:0}
         }}
         className=' w-[342px] flex flex-col m-auto'>
            <p className="text-h2 text-white font-clashdisplay font-normal pt-10 ">
            The furniture brand for the future, with timeless designs
            </p>
            <div className='text-body_lg text-white pt-20'>
                A new era in eco friendly furniture with Avelon, the French luxury retail brand
                with nice fonts, tasteful colors and a beautiful way to display things digitally
                using modern web technologies.
            </div>
            <button className='px-8 py-4 mt-8 border-none bg-opacity-[15%]  bg-light-grey transition duration-300 hover:bg-opacity-[30%]'>
            <Link to='/productlistings'>
                <div className='text-white'>
                    View collection  
                </div>
            </Link>
            </button>
        </motion.div>
       
        </motion.div>
</>
    }
    </section>
  )
}

export default Hero