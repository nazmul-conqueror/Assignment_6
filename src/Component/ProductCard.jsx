import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {
    const [buyNow, setBuyNow] = useState(false)

    const handleBuyNow = () =>{
        setBuyNow(true)
        const isFound = carts.find((item) => item.id === product.id)
        if(isFound){
            toast.error("Item Already in Cart")
            return;
        }

        setCarts([...carts ,product])
        toast.success("Item Added To Cart")


    }


    const tagColors = {
        'Best Seller': 'bg-yellow-500/50 text-yello',
        'Popular': 'bg-blue-500/50 text-blue',
        'New': 'bg-green-500/50 text-green',
    };
    const tagClass = tagColors[product.tag];


    return (
        <div>
            <div className="max-w-sm p-6 rounded-2xl border shadow-sm bg-white relative">

                <span className={`absolute top-4 right-4 text-xs  px-3 py-1 rounded-full ${tagClass}`}>
                    {product.tag}
                </span>

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                    {product.icon}
                </div>

                <h2 className="text-xl font-bold mb-2">{product.name}</h2>

                <p className="text-gray-500 text-sm mb-4">
                    {product.description}
                </p>

                <p className="text-2xl font-bold mb-4">
                    ${product.price}<span className="text-sm font-normal text-gray-500">/{product.period}</span>
                </p>

                <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                        <li
                            className="flex items-center gap-2 text-sm text-gray-600"
                        >
                            <span className="text-green-500">✔</span> {feature}
                        </li>
                    ))}
                </ul>

                <button onClick={handleBuyNow} className={`btn btn-primary w-full py-3 rounded-full text-white font-semibold ${
                    buyNow ? "btn-success" : "btn-primary"
                }`}>
                    {buyNow ? "Added to Cart": "Buy Now" }
                   

                </button>

            </div>

        </div>
    );
};

export default ProductCard;