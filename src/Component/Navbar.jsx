import React from 'react';
import cartLogo from "../assets/shopping-cart.png"


const Navbar = ({carts}) => {
    return (
        <div className='w-6xl mx-auto '>
            <div className="navbar bg-base-100 shadow-xs ">
  <div className="navbar-start">
  
    <p className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">DigiTools</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Produtcs</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
      <div className="relative">
    <img src={cartLogo} alt="" className="w-6" />
    
    {/* Cart Count Badge */}
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0.4 rounded-full">
      {`${(carts.length)}`}
    </span>
  </div>
    <p>Login</p>
    <a className="btn btn-primary rounded-full">Get Started</a>
  </div>
</div>


        </div>
    );
    
};

export default Navbar;