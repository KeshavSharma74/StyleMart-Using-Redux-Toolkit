import React, { useEffect, useState } from 'react'
import Shimmer from '../Components/Shimmer';
import ProductItem from '../Components/ProductItem';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(filtered);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const jsonData = await fetch(API_URL);
      const data = await jsonData.json();
      setAllProducts(data);
      setProducts(data);
    } catch (error) {
      console.log("Failed to fetch data because: " + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-center mb-8 '>
      <div className='w-[980px] ml-5 mt-8 '>
        <div className='relative'>
          <input 
            type="text"
            placeholder='Search Products'
            className='shadow-xl border-[0.5px] border-gray-400 px-4 py-2 text-[1.2rem] w-[280px] rounded-xl mb-8 pr-11'
            value={search}
            onChange={handleChange}>
              
            </input>
            <FaSearch className='absolute top-3 left-61 text-green-600 font-bold text-[1.4rem]' />
        </div>
        {
          loading ? (
            <Shimmer />
          ) : (
            <div className='grid grid-cols-4 gap-x-5 gap-y-5'>
              {
                products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;
