import React from 'react'
import StyleMart from '../../public/StyleMart.png'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-slate-800 flex w-full justify-center items-center'>
        <div className='w-[1000px] flex justify-between items-center '>
            <img src={StyleMart} className='h-[62px] hover:cursor-pointer' alt="" />
            <div className='mr-15'>
                <ul className='flex text-white gap-8 text-[1.1rem] font-semibold'>
                    <li className='hover:cursor-pointer'>Home</li>
                    <li className='hover:cursor-pointer'>Features</li>
                    <li className='hover:cursor-pointer'>Services</li>
                    <li className='hover:cursor-pointer'>Blogs</li>
                    <li className='hover:cursor-pointer'>About</li>
                </ul>
            </div>
            
            <div className='hover:cursor-pointer relative' >
                <FaShoppingCart className='text-white text-[2rem]' />
                <div className='absolute text-[0.7rem] font-semibold bottom-5 left-5 animate-bounce px-[0.35rem] rounded-full bg-green-600'>1</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar