import Navbar from "@/scenes/navbar"
import { ListingType } from "@/shared/types"
import PopularProductsItem from "@/scenes/popularProducts/PopularProductsItem"
import NewCeramicsItem from "@/scenes/newCeramics/NewCeramicsItem"
import Footer from "@/scenes/footer"
import { useState} from "react"
import useMediaQuery from '@/hooks/useMediaQuery'
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'
import PageHeader from '/Page Headers-2.png'


type ProductListingsType ={
  categories:Array<string>
  onFilterChange:(e:React.ChangeEvent<HTMLInputElement>) => void
  resetFilter:(e:React.MouseEvent)=>void
  modalActive:boolean
  setModalActive:React.Dispatch<React.SetStateAction<boolean>>
  items:Array<ListingType>
  cost:Array<string>
  designers:Array<string>
}


const ProductListings = ({categories,cost,designers,onFilterChange,modalActive,setModalActive,resetFilter,items}:ProductListingsType) => {
  const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
  const [moreItems,showMoreItems]=useState<boolean>(false)
  const [isSorting,setSorting]=useState<boolean>(false)


  return (
    <div className="container">
      <Navbar />
      <div 
      style={{backgroundImage:`url(${PageHeader})`}}
      className="md:h-[209px] xs:h-[146px] xs:mt-[80px] md:mt-0 xs:pt-16 xs:pb-8 xs:px-[92px] md:pl-20 md:pt-[123px]">  
        <div className=" text-h1 font-clashdisplay  text-white">All products</div>
      </div>
      {isAboveMediumScreen ?
      <>
        <div className="grid grid-cols-[385px_1fr] mt-9 mb-4">
            <div className="flex flex-col pl-20">
              <div className=" font-clashdisplay text-h5 text-dark-primary mb-5">Product type</div>
             
              <ul>
              {categories.map(category=>(
                <li key={category}>
                  <label>
                    <input className="w-4 h-4 accent-primary mr-2 mb-3" 
                    type="checkbox" 
                    value={category}
                    onChange={onFilterChange} />
                    {category}
                  </label>
                </li>
           )
              )}
              </ul>
              <div className=" font-clashdisplay text-h5 text-dark-primary mb-5 mt-12">Price</div>
              <ul>
              {cost.map(price=>(
                <li key={price}>
                  <label>
                    <input className="w-4 h-4 accent-primary mr-2 mb-3" 
                    type="checkbox" 
                    value={price}
                    onChange={onFilterChange} />
                    {price}
                  </label>
                </li>
           )
              )}
              </ul>
              <div className=" font-clashdisplay text-h5 text-dark-primary mb-5 mt-12">Designer</div>
              <ul>
              {designers.map(designer=>(
                <li key={designer}>
                  <label>
                    <input className="w-4 h-4 accent-primary mr-2 mb-3" 
                    type="checkbox" 
                    value={designer}
                    onChange={onFilterChange} />
                    {designer}
                  </label>
                </li>
           )
              )}
              </ul>
            </div>
           
              <div className="flex flex-col ">
                <div className="grid grid-cols-3 gap-6 pr-20">
                    {items
                    .map((e:ListingType)=>(
                      (moreItems ?
                      (e.id!==1)
                      : (e.id!=1 && e.id<11))
                        &&
                      <Link to={`/listing/${e.id-1}`}>
                        <PopularProductsItem 
                        id={e.id}
                        picture={e.picture}
                        name={e.name}
                        price={e.price}
                        cartQuantity={e.cartQuantity}
                      />
                      </Link>

                    ))}
                  </div>
                  {!moreItems &&
                  <button className=' bg-light-grey px-8 py-4 xs:w-[342px] xs:mb-[38px] md:w-[170px] text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey align-middle mx-auto mt-8 mb-9'
                  onClick={()=>showMoreItems(true)}>Show more</button>
                }
              </div>
      
          </div>
      </>
      :
      <>
      <div>
        <div className="my-5 flex gap-6 justify-center ">
          <div onClick={()=>{
            setModalActive(true)
            document.body.style.position='fixed'}}>
           
                <div className="appearance-none py-4 pl-[50.5px] bg-light-grey w-[163px] rounded-none text-h5 after:content-['▾'] after:ml-3" >
                  Filters
            
            </div>
          </div>
          <div onClick={()=>{
            setSorting(true)
            document.body.style.position='fixed'}}>
            
                <div className="appearance-none py-4 pl-[50.5px] bg-light-grey w-[163px] rounded-none text-h5 after:content-['▾'] after:ml-3"  >
                  Sorting
                </div>

  
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 my-0 mx-auto gap-6 mb-10">
            {items
            .map((e:ListingType)=>(
              (moreItems ?
              (e.id!==1)
              : (e.id!=1 && e.id<11))
                &&
                <Link to={`/listing/${e.id-1}`}>  
                  <NewCeramicsItem
                  id={e.id}
                  picture={e.picture}
                  name={e.name}
                  price={e.price}
                  cartQuantity={e.cartQuantity}
              />
                </Link>

            ))}
          </div>
          {!moreItems &&
          <button className=' bg-light-grey px-8 py-4 xs:w-[342px] xs:mb-[38px] md:w-[170px] text-dark-primary text-body_md transition ease-out duration-300  hover:bg-border-grey align-middle mx-auto mt-8 mb-9'
          onClick={()=>showMoreItems(true)}>Show more</button>
        }
        </div>
      </div>
          <div className={`h-[100vh] w-[100vw] bg-black/[0.6] fixed top-0 left-0 flex justify-center items-center transition duration-500 ${modalActive ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}>
                  <div className=" rounded-3xl bg-white h-[50vh] w-[100vw] ">
                      <div className="flex justify-center mt-2 ">
                        <div className="text-h4 font-semibold ">Filters</div>
                          <XMarkIcon className="w-6 h-6 absolute right-2" onClick={resetFilter}/>
                        </div>
                      <div className="text-sm flex justify-around mt-7">
                        <div>
                          <div className="font-clashdisplay text-h5 text-dark-primary mb-3">Product type</div>
                          <ul >
                          {categories.map(category=>(
                            <li key={category}>
                              <label>
                                <input className="w-4 h-4 accent-primary mr-2 mb-2" 
                                type="checkbox" 
                                value={category}
                                onChange={onFilterChange} />
                                {category}
                              </label>
                            </li>
                          )
                          )}
                          </ul>
                        </div>
                        <div className="">
                          <div className="font-clashdisplay text-h5 text-dark-primary mb-3">Price</div>
                          <ul>
                          {cost.map(price=>(
                            <li key={price}>
                              <label>
                                <input className="w-4 h-4 accent-primary mr-2 mb-2" 
                                type="checkbox" 
                                value={price}
                                onChange={onFilterChange} />
                                {price}
                              </label>
                            </li>
                          )
                          )}
                          </ul>
                        </div>
                        <div>
                          <div className=" font-clashdisplay text-h5 text-dark-primary mb-3">Designer</div>
                          <ul>
                          {designers.map(designer=>(
                            <li key={designer}>
                              <label>
                                <input className="w-4 h-4 accent-primary mr-2 mb-2" 
                                type="checkbox" 
                                value={designer}
                                onChange={onFilterChange} />
                                {designer}
                              </label>
                            </li>
                      )
                          )}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center py-16">
                        <button className='px-8 py-4 w-[342px] border-none bg-dark-primary text-white' onClick={()=>{
                          setModalActive(false)
                          document.body.style.position=''
                          }}>  
                              Show items
                        </button>
                      </div>
                    </div>
          </div>
          <div className={`h-[100vh] w-[100vw] bg-black/[0.6] fixed overflow-y-hidden top-0 left-0 flex justify-center items-end transition duration-500 ${isSorting ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}
          onClick={()=>{
            setSorting(false)
            document.body.style.position=''
          }}>
              <div className="rounded-2xl opacity-80 bg-white h-[20vh] w-[100vw] mb-20 flex flex-col justify-around transition duration-500" 
              onClick={(e)=>e.stopPropagation}>
                    <button className="border-b-[1px] text-xl py-2" onClick={()=>{
                      items.sort((a,b)=>a.price-b.price)
                      setSorting(false)
                      document.body.style.position=''}}>Increasing price</button>
                    <button className="border-b-[1px] text-xl pb-3" onClick={()=>{
                      items.sort((a,b)=>a.price-b.price).reverse()
                      setSorting(false)
                      document.body.style.position=''}}>Decreasing price</button>
                    <button className="text-xl font-bold pb-2" onClick={()=>{
                      setSorting(false)
                      document.body.style.position=''}}>Cancel</button>
              </div>
          </div>

      </>
      }
          <Footer />
    </div>
  )
  
}



export default ProductListings