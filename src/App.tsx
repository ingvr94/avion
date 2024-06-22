import Home from "./pages/Home"
import About from "./pages/About"
import ProductListings from "./pages/ProductListings"
import Listing from "./pages/Listing"
import {Routes, Route,Navigate} from 'react-router-dom'
import storeItems from '@/data/items.json'
import { useCallback, useState, useEffect } from "react"
import ShoppingCart from "./pages/ShoppingCart"
import { useSelector, useDispatch } from "react-redux"
import { getTotals } from "./state/cart/cartSlice"

function App() {

  const cart=useSelector((state:any)=>state.cart)
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getTotals())
  },[cart,dispatch])

const [state,setState]=useState({
  items:storeItems,
  filters:new Set()
})


const categories=['Furniture','Homeware','Sofas','Light fittings','Accessories'] 
const cost=['0-100','101-250','250+']
const designers=['Robert Smith','Liam Gallagher','Biggie Smalls','Thom Yorke']

const [modalActive,setModalActive]=useState<boolean>(false)

const resetFilter=useCallback(()=>{
  setState(previousState =>{
    let filters=new Set(previousState.filters)
    let items=storeItems

    filters.clear()
    document.querySelectorAll('input').forEach(el=>el.checked=false)
    setModalActive(false)
    document.body.style.position=''

    return {filters,items}
  })
},[setState])


const handleFilterChange=useCallback((event:React.ChangeEvent<HTMLInputElement>):void=>{
  setState(previousState=>{
    let filters=new Set(previousState.filters)
    let items=storeItems

    if (event.target.checked) {
      filters.add(event.target.value)
    } else {
      filters.delete(event.target.value)
    }

    if (filters.size) {

      items.forEach(e=>{

        if (!filters.has(e.category) && !filters.has(e.designer) && filters.has(e.cost)) {
          items=items.filter(item=>{
             return filters.has(item.cost) 
            })
        } 
        else if (!filters.has(e.cost) && !filters.has(e.designer) && filters.has(e.category)) {
          items=items.filter(item=>{
             return filters.has(item.category)  
            })
        } 
        else if (!filters.has(e.cost) && filters.has(e.designer) && !filters.has(e.category)) {
          items=items.filter(item=>{
             return filters.has(item.designer)  
            })
        } 
         else if (filters.has(e.category && e.cost) && !filters.has(e.designer)) {
           items=items.filter(item=>{
              return filters.has(item.category) && filters.has(item.cost) 
             })
         } 

         else if (filters.has(e.category && e.designer) && !filters.has(e.cost)) {
          items=items.filter(item=>{
             return filters.has(item.category) && filters.has(item.designer) 
            })
        } 

        else if (filters.has(e.designer && e.cost) && !filters.has(e.category)) {
          items=items.filter(item=>{
             return filters.has(item.designer) && filters.has(item.cost) 
            })
        } 

        else if (filters.has(e.category && e.cost && e.designer)) {
          items=items.filter(item=>{
             return filters.has(item.category) && filters.has(item.cost) && filters.has(item.designer) 
            })
        } 
      })
    }
    return {
      filters,
      items
    }

  })
},[setState])


  return (
    
      <>
        <Routes>
          <Route path="/" element={<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/productlistings" element={<ProductListings categories={categories} cost={cost} designers={designers} onFilterChange={handleFilterChange} modalActive={modalActive}
          setModalActive={setModalActive} resetFilter={resetFilter} items={state.items}/>}/>
          <Route path="/listing/:id" element={<Listing />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>
      </>


  )
}

export default App
