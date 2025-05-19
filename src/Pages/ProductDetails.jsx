import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from '../Components/Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add } from '../features/card/CardSlice';
import { FaStar } from 'react-icons/fa';
import ShimmerProduct from '../Components/ShimmerProduct';

const ProductDetails = () => {

    const {id}=useParams();
    const [loading,setLoading]=useState(false);
    const [product,setProduct]=useState({});

    const cart=useSelector( (state)=>state.card );
    const dispatch=useDispatch();

    const fetchData=async()=>{
        setLoading(true);
        try{
            const jsonData=await fetch(`https://fakestoreapi.com/products/${id}`);
            const data=await jsonData.json();
            setProduct(data);
        }
        catch(err){
            console.log('Error in fetching the data of a Product '+ err.message);
        }
        setLoading(false);
    }

    const handleAddItem=()=>{
        if(cart.includes(product)){
            toast.warning('Item Already Present In Cart');
            return;
        }
        dispatch(add(product));
        toast.success('Item Added to Cart');
    }

    useEffect( ()=>{
        fetchData();
    },[])

  return (
    <div className='w-full flex justify-center items-center mt-8'>
        <div className='w-[1000px] '>
                {
             (loading)? 
                (<ShimmerProduct></ShimmerProduct>) :
                (<div className='flex '>
                    <div className='w-1/2'>
                        <img src={product.image} className='h-full hover:scale-110 transition-all duration-300 p-4' alt="" />
                    </div>
                    
                    <div className=' w-full p-4'>
                            <p className='text-[3rem] text-slate-800 font-semibold leading-13'>{product.title}</p>
                            <p className='mt-3 text-gray-400 font-extralight mb-2'>{product.description}</p>
                            <span className='  text-[2rem] text-green-700 cartItemNumber ml-2 font-semibold'>${product.price} </span>
                              <div className='flex items-center mt-2 mb-3'>
                                    {[...Array(5)].map((_, index) => {
                                    const rate = product.rating?.rate || 0;
                                    const filled = (index + 1) <= rate;
                                    return (
                                        <FaStar
                                        key={index}
                                        className={`${filled ? 'text-yellow-400' : 'text-gray-300'} ml-1 text-[1.25rem] `}
                                        />
                                    );
                                    })}
                                    <span className="ml-2 text-gray-600 cartItemNumber font-semibold">({product.rating?.count})</span>
                                </div>
                            <button className='bg-green-700 px-3 py-2 text-[1.3rem] text-white font-bold w-[150px] rounded-xl mt-2 hover:cursor-pointer hover:text-green-700 transition-all duration-300 hover:bg-white hover:border hover:border-green-700' onClick={handleAddItem}>
                                    Add to Cart
                            </button>
                    </div>
                    
                </div>)
                }
        </div>

    </div>
  )
}

export default ProductDetails