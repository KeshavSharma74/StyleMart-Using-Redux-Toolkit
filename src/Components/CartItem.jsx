import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../features/card/CardSlice';
import { toast } from 'react-toastify';

const CartItem = (props) => {
    const item=props.item;
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(remove(item.id));
        toast.error('Item Removed From Cart')
    }

  return (
    <div>
        <img src={item.image} alt="" />
        <div>
            <h1>{item.title.substring(0,14)+"..."}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button className='border p-2 ' onClick={handleDelete} >delete</button>
        </div>
    </div>
  )
}

export default CartItem