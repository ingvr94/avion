import useMediaQuery from '@/hooks/useMediaQuery'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Footer = () => {
const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
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
    <>
    {isAboveMediumScreen ? 
    <>
        <div className=' bg-dark-primary px-[82px] pt-[58px] text-white '>
            <div className='flex '>
                <ul>
                    <li className='text-h5 font-clashdisplay pb-3'>Menu</li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/productlistings'>All products</Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/cart'>
                            Cart
                        </Link>
                    </li>
                </ul>
                <ul className='pl-[109px]'>
                    <li className='text-h5 font-clashdisplay pb-3'>Categories</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Crockery</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Furniture</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Homeware</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Plant pots</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Chairs</li>
                </ul>
                <ul className='pl-[133px]'>
                    <li className='text-h5 font-clashdisplay pb-3 whitespace-nowrap'>Our company</li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>Vacancies</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Contact us</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Privacy</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Returns policy</li>
                </ul>
                <div className='pl-[109px]'>
                    <div className='text-h5 font-clashdisplay'>Join our mailing list</div>
                    <form 
                    target="_blank"
                    onSubmit={onSubmit}>
                    {errors.email && (
                  <p className="text-xs mt-2 text-red-500">
                   {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email.'}
                  </p>
                )}
                    <div className='flex pt-4'>
                        <input
                        {...register('email',{
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                         className=" border-none bg-opacity-[15%] bg-light-grey w-[509px] h-14 text-white pl-8 py-[17px]" 
                         placeholder="your@email.com" type="text" />
                        <button type='submit' className="bg-white text-dark-primary text-body_md transition ease-out hover:bg-border-grey px-8 whitespace-nowrap">Sign up</button>
                    </div>
                    </form>
                    
                </div>
            </div>
            <div className='flex border-t border-primary justify-between mt-12 py-6 '>
                <div className='text-body_sm'>Copyright 2022 Avion LTD</div>
                <div className='flex space-x-6 cursor-pointer'>
                    <IconContext.Provider value={{size:'24'}}>
                        <>
                            <FaLinkedin/>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaSkype />
                            <FaTwitter />
                            <FaPinterest />
                        </>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </>:
    <>
        <div className=' bg-dark-primary px-[25px] pt-[58px] text-white'>
            <div className='grid grid-cols-2'>
            <ul>
                    <li className='text-h5 font-clashdisplay pb-3'>Categories</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Crockery</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Furniture</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Homeware</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Plant pots</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Chairs</li>
                </ul>
                <ul>
                    <li className='text-h5 font-clashdisplay pb-3'>Menu</li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/productlistings'>All products</Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/cart'>
                            Cart
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className='text-h5 font-clashdisplay pb-3 pt-10'>Our company</li>
                    <li className='text-h6 pb-3 cursor-pointer'>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li className='text-h6 pb-3 cursor-pointer'>Vacancies</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Contact us</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Privacy</li>
                    <li className='text-h6 pb-3 cursor-pointer'>Returns policy</li>
                </ul>
                </div>
                <div className='pt-10 pb-4'>
                    <div className='text-h5 font-clashdisplay'>Join our mailing list</div>
                    <form
                    target="_blank"
                    onSubmit={onSubmit}
                   >
                    {errors.email && (
                        <p className="text-xs mt-2 text-red-500">
                        {errors.email.type === 'required' && 'This field is required.'}
                            {errors.email.type === 'pattern' && 'Invalid email.'}
                        </p>
                    )}
                        <div className='flex'>
                            <input
                            {...register('email',{
                                required:true,
                                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                            className=" border-none bg-opacity-[15%] bg-light-grey md:w-[509px] xs:w-[224px] h-14 text-white pl-8 py-[17px]" placeholder="your@email.com" type="text" />
                            <button  type='submit' className="bg-white text-dark-primary text-body_md transition ease-out hover:bg-border-grey px-8">Sign up</button>
                        </div>
                        
                    </form>
                </div>
            <div className='flex justify-center border-t border-primary pt-6 pb-5'>
                <div className='text-body_sm'>Copyright 2022 Avion LTD</div>
            </div>
            
        </div>
    </>}
    </>
  )
}

export default Footer