import {MagnifyingGlassIcon,Bars4Icon,XMarkIcon} from '@heroicons/react/24/solid'
import {ShoppingCartIcon, UserCircleIcon} from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useSelector } from 'react-redux'
import storeItems from '@/data/items.json'
import { ListingType } from '@/shared/types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'



const NavAbout = () => {
  const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
  const [searchInput,showSearchInput]=useState<boolean>(false)
  const [inputText,setInputText]=useState<string>('')
  const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)

  const {cartTotalQuantity}=useSelector((state:any)=>state.cart)

  const inputHandler=(e:React.ChangeEvent<HTMLInputElement>)=> {
    let lowerCase=e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  const filteredData=storeItems.filter((el:ListingType)=>{
    if (inputText==='') return el
    else return el.name.toLowerCase().includes(inputText)
  })


  return (
    <nav className='xs:sticky md:relative xs:top-0 bg-white'>
    {isAboveMediumScreen ?
      <>
        <div className='flex justify-between mx-7 pb-6 '> 
      
          <p className='font-clashdisplay text-h3 mt-5 cursor-pointer'>
          <Link to='/home'>
            Avion
          </Link>

            </p>
    
          <div className='flex flex-row mt-7'>
                <ul className='gap-8 flex text-header-list cursor-pointer text-h5 pr-[47px]'>
                  <li>About us</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
                <div className='flex mt-1'>
                {searchInput && 
          <div className='relative'>
            <input onChange={inputHandler} placeholder='Search...' className=' bg-gray-200 h-6 rounded-lg px-3 mr-2 transition-all' type="search" />
            <span 
            onClick={()=>{
              showSearchInput(false)
              setInputText('')}} 
            className='absolute transition-transform cursor-pointer right-4 bottom-0.5'>x</span>
            {inputText.length >=2 &&
            <ul className='absolute bg-gray-100 h-[100px] overflow-y-scroll cursor-pointer'>
              {filteredData.map((el:ListingType)=>(
                <li key={el.id}>
                  <Link to={`/listing/${el.id-1}`}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>}
          </div>
          }
                <MagnifyingGlassIcon onClick={()=>showSearchInput(!searchInput)} className='mr-7 w-6 h-6 cursor-pointer'/>
                <Link to='/cart'>
                <ShoppingCartIcon className='mr-7 w-6 h-6 cursor-pointer'/>
                  {cartTotalQuantity>0 && <div className='rounded bg-black flex justify-center items-center w-3 h-3 absolute text-white text-xs font-bold cursor-pointer'>{cartTotalQuantity}</div>}
                </Link>
                  <UserCircleIcon className='w-6 h-6 cursor-pointer'/>
                </div>
                
          </div>
        </div>
        <ul className='list-none text-header-list flex flex-row justify-center text-h5 gap-11  bg-light-grey py-5'>
            <li>All products</li>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chair</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
        </ul> 
        </>
        :
        <>
        <div className='w-100 flex justify-between mx-7 pb-6'> 
            <p className='font-clashdisplay text-h3 mt-5 cursor-pointer'>Avion</p>
            <div className='flex flex-row mt-7'>
                  <Bars4Icon onClick={()=>setIsMenuToggled(!isMenuToggled)} className='w-6 h-6 cursor-pointer'/>
            </div>
        </div>
        <AnimatePresence>
        {isMenuToggled && (
        <motion.div
        initial={{ x:300, opacity:0 }}
        animate={{ x:0,opacity:1 }}
        exit={{ x:300, opacity:0 }}
        className="fixed right-0 bottom-0 z-10  h-full w-[300px] bg-white drop-shadow-sm">
             {/* Close icon */}
             <div className="flex justify-end p-12">
                <button
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6"/>
                </button>
             </div>
             {/* Menu items*/}
             <ul className='ml-[33%] flex flex-col gap-10 text-2xl'>
                  <li>
                    <Link to='/home'>Home</Link>
                  </li>
                  <li> 
                    <Link to='/productlistings'>All products</Link>
                  </li>
                  <li>
                    <Link to='/about'>About us</Link>
                    </li>   
                  <li>
                    <Link to='/cart'>
                      <div className='flex'>
                        <span>Cart</span>
                      </div>
                      </Link>
                  </li>  
             </ul>
        </motion.div>
    )}  
        </AnimatePresence>
        <ul className='list-none text-header-list flex flex-row  text-h5 gap-11 px-6  bg-light-grey py-5 overflow-auto whitespace-nowrap'>
            <li>All products</li>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chair</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
        </ul>  
        </>
      }
      </nav>
  )

}

export default NavAbout








