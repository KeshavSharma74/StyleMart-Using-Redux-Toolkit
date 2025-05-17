import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.card);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setAmount(total);
  }, [cart]);

  return (
    <div className='w-full h-full flex justify-center mt-8 mb-8'>
      {cart.length > 0 ? (
        <div className='w-[975px] ml-6 flex'>
          {/* Left Side: Cart Items */}
          <div className='w-1/2'>
            <div className='flex flex-col gap-6'>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Side: Summary */}
          <div className='w-1/2 flex flex-col'>
            <div className='flex flex-col'>
              <p className='text-[2.8rem] text-green-600 font-semibold -mb-8'>YOUR CART</p>
              <p className='text-[6rem] text-green-600 font-semibold'>SUMMARY</p>
            </div>

            <p className='text-[1.5rem] text-green-700 font-semibold'>
              Total Items: 
              <span className='text-[1.7rem] text-slate-700 ml-2'>
                {cart.length}
              </span>
            </p>

            <p className='text-[1.5rem] text-green-700 font-semibold'>
              Total Price: 
              <span className='text-[1.7rem] text-slate-700 ml-2'>
                ${amount.toFixed(2)}
              </span>
            </p>

            <p className='text-[1.3rem] text-gray-400 font-semibold mt-2'>
              Great choice! Quality never goes out of style.
            </p>

            <button className='bg-green-700 px-3 py-2 text-[1.55rem] text-white font-bold w-[210px] rounded-xl mt-4 hover:cursor-pointer hover:text-green-700 transition-all duration-300 hover:bg-white hover:border hover:border-green-700'>
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <p className='text-[2.8rem] text-green-600 font-semibold mb-4'>Your Cart is Empty</p>
          <Link to='/'>
            <button className='bg-green-700 px-3 py-2 text-[1.55rem] text-white font-bold w-[210px] rounded-xl mt-2 hover:cursor-pointer hover:text-green-700 transition-all duration-300 hover:bg-white hover:border hover:border-green-700'>
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
