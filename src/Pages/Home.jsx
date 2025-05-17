import React, { useEffect, useState } from 'react'
import Shimmer from '../Components/Shimmer';
import ProductItem from '../Components/ProductItem';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(true);
  const [products,setProducts]=useState([]);

  const fetchData=async()=>{
    setLoading(true);
    try{
      const jsonData= await fetch(API_URL);
      const data=await jsonData.json();
      setProducts(data);
      console.log(data);
    }
    catch(error){
      console.log("failed to fetch data because : " + error.message);
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[])

  return (
    <div className='w-full h-full flex justify-center items-center mb-8 '>
        <div className='w-[980px] ml-5 mt-8 '>
          {
            (loading)?
            (<Shimmer></Shimmer>) :
            (<div className='grid grid-cols-4 gap-x-5 gap-y-5'>
              {
                products.map( (product)=>(
                  <ProductItem key={product.id} product={product} ></ProductItem>
                ))
              }
            </div>) 
          }
        </div>
    </div>

  )
}

export default Home