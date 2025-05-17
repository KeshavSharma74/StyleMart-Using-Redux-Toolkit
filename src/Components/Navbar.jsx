import React from 'react'
import StyleMart from '../../public/StyleMart.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../Pages/Cart'

const Navbar = () => {

    const cart=useSelector((state)=>state.card)

  return (
    <div className='bg-slate-800 flex w-full justify-center items-center'>
        <div className='w-[1000px] flex justify-between items-center '>
            <Link to='/'>
                <img src={StyleMart} className='h-[72px] hover:cursor-pointer' alt="" />
            </Link>
            
            <div className='mr-15'>
                <ul className='flex text-white gap-8 text-[1.1rem] font-semibold'>
                    <Link to='/' >
                        <li className='hover:cursor-pointer'>Home</li>
                    </Link>

                    <Link to='/features' >
                        <li className='hover:cursor-pointer'>Features</li>
                    </Link>
                    
                    <Link to='services'>
                        <li className='hover:cursor-pointer'>Services</li>
                    </Link>
                    
                    <Link to='blogs'>
                        <li className='hover:cursor-pointer'>Blogs</li>
                    </Link>

                    <Link to='about' >
                        <li className='hover:cursor-pointer'>About</li>
                    </Link>
                    
                </ul>
            </div>
            <Link to='/cart'>
                <div className='hover:cursor-pointer relative ' >
                    <FaShoppingCart className='text-white text-[2rem]' />
                    <div className='absolute text-[0.78rem]  bottom-5 left-5 animate-bounce px-[0.38rem] text-white rounded-full bg-green-600 cartItemNumber'>{cart.length}</div>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Navbar