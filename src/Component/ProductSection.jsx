import React, { use,} from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({productPromise, carts, setCarts}) => {
    const products = use(productPromise);




    return (
        <div className='mb-20 w-6xl mx-auto mt-2'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Premium Digital Tools</h2>
            <p className='text-gray-500'>Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.</p></div>
            <div>
            <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10' >
          {products.map((product) => (
            <ProductCard key={product.id}  product={product} carts = {carts} setCarts = {setCarts} />
        
            ))}
            </div >
   
            </div>

        </div>
    );
};

export default ProductSection;