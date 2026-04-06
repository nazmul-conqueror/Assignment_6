
import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import ProductSection from './Component/ProductSection'
import RatingSection from './Component/RatingSection'
import Cart from './Component/Cart'

 const getProducts = async () =>{
    const res = await fetch('/digitools.json')
    return res.json()
  };
  
  
  const productPromise = getProducts();



function App() {
  const [activeTab, setActiveTab] = useState("product")
  console.log(activeTab)
  
  return (
   

    <>
   
    <Navbar/>
    <HeroSection/>
    <RatingSection/>
    
    <div>
        {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=>setActiveTab("product")} type="radio" name="my_tabs_1" className="tab  rounded-full w-40" aria-label="Products" defaultChecked/>
  <input onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart"  />
 
</div>
      </div>

   
   {activeTab === "product" && <ProductSection productPromise={productPromise} />}
   
   {activeTab === "cart" && <Cart productPromise={productPromise}/>}
 
    

   
     
    </>
  )
}

export default App
