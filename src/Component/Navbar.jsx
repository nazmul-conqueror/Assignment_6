import React from 'react';
import cartLogo from "../assets/shopping-cart.png"


const Navbar = () => {
    return (
        <div className='w-7xl mx-auto'>
            <div className="navbar bg-base-100 shadow-xs">
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
    <span><img src={cartLogo} alt="" /></span>
    <p>Login</p>
    <a className="btn btn-primary rounded-full">Get Started</a>
  </div>
</div>


        </div>
    );
    
};

export default Navbar;