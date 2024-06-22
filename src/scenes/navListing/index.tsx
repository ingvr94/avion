import {MagnifyingGlassIcon,Bars4Icon} from '@heroicons/react/24/solid'
import {ShoppingCartIcon, UserCircleIcon} from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import storeItems from '@/data/items.json'
import { ListingType } from '@/shared/types'



const NavListing = () => {
  const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
  const {cartTotalQuantity}=useSelector((state:any)=>state.cart)
  const [searchInput,showSearchInput]=useState<boolean>(false)
  const [inputText,setInputText]=useState<string>('')

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
        <div className='flex justify-between mx-20 my-[25px] '>      
          <p className='font-clashdisplay text-h3  cursor-pointer'>
          <Link to='/home'>
            Avion
          </Link> 
          </p>
          <ul className='list-none text-header-list flex flex-row  text-h5 gap-11 '>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chair</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
        </ul> 
                <div className='flex relative'>
                  <MagnifyingGlassIcon onClick={()=>showSearchInput(!searchInput)} className='mr-7 w-6 h-6 cursor-pointer'/>
                  {searchInput && 
          <div className='absolute right-32'>
            <input onChange={inputHandler} placeholder='Search...' className=' bg-gray-200 h-7 rounded-lg px-3 transition-all' type="search" />
            <span 
            onClick={()=>{
              showSearchInput(false)
              setInputText('')}} 
            className='absolute transition-transform cursor-pointer right-2'>x</span>
            {inputText.length >=2 &&
            <ul className=' bg-gray-100 h-[100px] overflow-y-scroll cursor-pointer'>
              {filteredData.map((el:any)=>(
                <li key={el.id}>
                  <Link to={`/listing/${el.id-1}`}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>}
          </div>
          
          }
                  <Link to='/cart'>
                      <ShoppingCartIcon className='mr-7 w-6 h-6 cursor-pointer'/>
                    { cartTotalQuantity >0 &&
                      <div className='rounded bg-black flex justify-center items-center w-3 h-3 absolute top-0 right-16 text-white text-xs font-bold'>{cartTotalQuantity}</div>
                    }
                  </Link>

                  <UserCircleIcon className='w-6 h-6 cursor-pointer'/>
                </div>     
        </div> 
        </>
        :
        <>
        <div className='w-100 flex justify-between mx-7 pb-6'> 
            <p className='font-clashdisplay text-h3 mt-5 cursor-pointer'>Avion</p>
            <div className='flex flex-row mt-7'>
                  <Bars4Icon className='w-6 h-6 cursor-pointer'/>
            </div>
        </div>
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

export default NavListing








