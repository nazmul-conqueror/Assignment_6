
import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import ProductSection from './Component/ProductSection'
import RatingSection from './Component/RatingSection'
import Cart from './Component/Cart'
import GetStarted from './Component/getStarted'
import Pricing from './Component/Pricing'
import Footer from './Component/Footer'

 const getProducts = async () =>{
    const res = await fetch('/digitools.json')
    return res.json()
  };
  
  
  const productPromise = getProducts();



function App() {
  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([]);
  
  
  return (
   

    <>
   
    <Navbar carts={carts}/>
    
    
    
    <div>
        {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=>setActiveTab("product")} type="radio" name="my_tabs_1" className="tab  rounded-full w-40" aria-label="Products" defaultChecked/>
  <input onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`}  />
 
</div>
      </div>

   
   {activeTab === "product" && (
    <>

    <HeroSection/>
    <RatingSection/>
    <div>
        {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=>setActiveTab("product")} type="radio" name="my_tabs_1" className="tab  rounded-full w-40" aria-label="Products" defaultChecked/>
  <input onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`}  />
 
</div>
      </div>

    <ProductSection productPromise={productPromise} carts= {carts} setCarts = {setCarts} /> 
    <GetStarted/>
    <Pricing/>

    </>
    )}
   
   {activeTab === "cart" && (<>
   <Cart carts = {carts} setCarts={setCarts}/>
      
    </>)}
 
    

  
  
  <Footer/>
     
    </>
  )
}

export default App
