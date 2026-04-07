import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="bg-[#0B1120] text-gray-400 p-10 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mt-7 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
          <p className="max-w-xs leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links: Product */}
        <div>
          <span className="text-white font-semibold mb-4 block">Product</span>
          <ul className="space-y-2">
            <li><a className="link link-hover">Features</a></li>
            <li><a className="link link-hover">Pricing</a></li>
            <li><a className="link link-hover">Templates</a></li>
            <li><a className="link link-hover">Integrations</a></li>
          </ul>
        </div>

        {/* Links: Company */}
        <div>
          <span className="text-white font-semibold mb-4 block">Company</span>
          <ul className="space-y-2">
            <li><a className="link link-hover">About</a></li>
            <li><a className="link link-hover">Blog</a></li>
            <li><a className="link link-hover">Careers</a></li>
            <li><a className="link link-hover">Press</a></li>
          </ul>
        </div>

        {/* Links*/}
        <div>
          <span className="text-white font-semibold mb-4 block">Resources</span>
          <ul className="space-y-2 mb-6">
            <li><a className="link link-hover">Documentation</a></li>
            <li><a className="link link-hover">Help Center</a></li>
            <li><a className="link link-hover">Community</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
          
          <span className="text-white font-semibold mb-4 block">Social Links</span>
          <div className="flex gap-3">
            {/* Social Icons  */}
            <a className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
              <span className="text-black text-xs font-bold">i</span>
            </a>
            <a className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
              <span className="text-black text-xs font-bold">f</span>
            </a>
            <a className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
              <span className="text-black text-xs font-bold">X</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Cookies</a>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;