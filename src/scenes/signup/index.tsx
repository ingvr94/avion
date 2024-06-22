import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

const SignUp = () => {

  const {
    register,
    trigger,
    formState:{errors}
    }=useForm()

    const onSubmit=async (e:any) =>{
      const isValid= await trigger()
      if (!isValid) {
          e.preventDefault()
      }
  }

  return (
    <section className=" md:bg-light-grey w-100 md:flex justify-center items-center ">
        <div className="bg-white md:w-[1273px] xs:w-100 md:mt-[72px] md:mb-[65px] flex
        md:pt-[68px] md:pb-[54px] flex-col justify-center items-center xs:pt-12 xs:pb-[38px] xs:px-6 ">
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.2}}
            transition={{delay:0.8, duration:0.5}}
            variants={{
                hidden:{opacity:0, y:-50},
                visible:{opacity:1,y:0}
            }}
            className="font-clashdisplay md:text-h1 xs:text-h4">Join the club and get the benefits
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.2}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
                hidden:{opacity:0, y:-50},
                visible:{opacity:1,y:0}
            }}
            className="md:text-body_md xs:text-body_sm md:w-[470px] md:text-center pt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </motion.div>
            <form 
            target="_blank"
            onSubmit={onSubmit}
            className=" md:pt-[72px] xs:pt-[64px]">
                {errors.email && (
                  <p className="text-xs text-red-500">
                   {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email.'}
                  </p>
                )}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount:0.2}}
                transition={{delay:1, duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1,y:0}
                }}
              className="flex">
                <input 
                  className=" bg-light-grey md:h-[56px] md:w-[354px] xs:h-[56px] xs:w-[224px] pl-8 text-dark-primary" 
                  placeholder="your@email.com" 
                  type="text"
                  {...register('email',{
                    required:true,
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })} />
                  <button type="submit" className="bg-dark text-white text-body_md transition ease-out hover:bg-dark-primary px-8">Sign up</button>
              </motion.div>
                
            </form>
        </div>
    </section>
  )
}

export default SignUp