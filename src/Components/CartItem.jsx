import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../features/card/CardSlice';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';

const CartItem = (props) => {
    const item=props.item;
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(remove(item.id));
        toast.error('Item Removed From Cart')
    }

  return (
    <div className='shadow-2xl w-11/12 rounded-2xl flex p-5 gap-3 transition-all duration-300 hover:scale-105'>
        <img src={item.image} className='h-[185px]' alt="" />
        <div className='flex flex-col gap-4'>
            <h1 className='text-slate-700 font-bold text-[1.1rem]' >{item.title.substring(0,14)+"..."}</h1>
            <p className='text-gray-400 text-[0.88rem]' >{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            <div className='flex justify-between'>
                  <p className='cartItemNumber text-[1.3rem] text-green-600 font-bold '>${item.price}</p>
                  <button className='hover:cursor-pointer' onClick={handleDelete} >
                    <MdDelete className='text-[1.7rem] text-red-400 hover:text-red-700' />
                  </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem