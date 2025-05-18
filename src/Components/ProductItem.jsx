import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/card/CardSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const isInCart = cart.some(item => item.id === product.id);

  const handleRemove = (e) => {
    e.stopPropagation(); 
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };

  const handleAdd = (e) => {
    e.stopPropagation(); 
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const handleProductClick=()=>{
    navigate(`/product/${product.id}`);
  }

  return (
    <div className='shadow-2xl transition-all border-[0.5px] border-gray-300 duration-300 hover:scale-105 rounded-3xl p-3 text-center flex flex-col justify-between gap-3' onClick={handleProductClick} >
      <p className='text-[1.1rem] font-bold text-slate-800 '>{product.title.substring(0, 17) + "..."}</p>
      <p className='text-[0.8rem] text-gray-400 '>{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      <img src={product.image} className='h-[170px] self-center object-contain' alt={product.title} />
      <div className='flex justify-between items-center mb-1'>
        <p className='text-green-600 font-bold cartItemNumber text-[1.1rem]'>${product.price}</p>
        <button
          className='border-2 text-[0.85rem] hover:text-white text-slate-700 hover:cursor-pointer font-semibold hover:bg-slate-700 transition-all duration-300 border-slate-600 rounded-2xl py-1 px-3'
          onClick={isInCart ? handleRemove : handleAdd}
        >
          {isInCart ? "REMOVE ITEM" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
