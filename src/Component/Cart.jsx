import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) =>
         sum + item.price, 0);

    const handlePayment = () =>{
        setCarts([]);
        toast.success("Payment Successful")
    };
const handleDelete = (item) =>{
    const filteredArray = carts.filter(c => c.id !== item.id)
   setCarts(filteredArray);
   toast("Item removed")
}



    return (
        <div className='mb-10 max-w-6xl mx-auto px-4'>
           <h1 className='text-xl font-bold mb-4'>Your Cart</h1>
           {
            carts.length === 0 ? <p className='text-3xl text-center p-5'>Cart is Empty</p> : 
            <>
                <div>
              {
            carts.map((item) =>
                  
                <div key ={item.id}>
                   
                    <div className='flex flex-col sm:flex-row justify-between items-center px-3 py-3 mb-5 shadow-sm '>
                      
                       <div className='flex items-center gap-5 '>
                        <p>{item.icon}</p>
                        <div><p>{item.name}</p>
                        <p>${item.price}</p></div>
                       </div>
                       <div>
                        <p onClick={() =>handleDelete(item)} className='btn text-[#ff3980]'>remove</p>
                       </div>
                    </div>
                
                       
                </div>
        )
          }
        </div>
    <div className='flex justify-between'>
        <p className='text-gray-500'>Total:</p>
        <p className='text-2xl font-bold'>${totalPrice}</p>
    </div>
    <div>
        <button onClick={handlePayment} className='btn btn-accent w-full rounded-3xl mt-4'>Proceed to Checkout</button>
    </div>

            </> 
           }
    

        </div>
    );
};

export default Cart;