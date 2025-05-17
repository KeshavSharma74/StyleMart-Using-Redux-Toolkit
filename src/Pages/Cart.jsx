import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'

const Cart = () => {

  const cart=useSelector( (state)=>state.card )
  //  const cart=useSelector((state)=>state.card)
  const [amount,setAmount]=useState(0);

  useEffect( ()=>{
    const total=cart.reduce( (acc,curr)=> acc+curr.price,0);
    setAmount(total)
  },[cart])

  return (
    <div className='w-full h-full flex justify-center '>
        <div className='w-[975px] ml-6 border flex'>
        <div className='w-1/2 border'>
            {
              cart.map( (item)=>(
                <CartItem key={item.id} item={item} ></CartItem>
               ) )
            }
        </div>
        <div className='w-1/2'>
            <h2>YOUR CART</h2>
            <h1>SUMMARY</h1>
            <p>Total Items : {cart.length}</p>
            <p>Total Price: {amount.toFixed(2)}</p>
        </div>
        </div>
      </div>
  )
}

export default Cart