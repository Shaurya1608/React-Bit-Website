import React from 'react'
import NeonNavbar from '../components/Navigation/NeonNavbar'
import { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from '../services/productApi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const FinalData = async ()=>{
      try {
        const Fixed = await getProducts();
        setProducts(Fixed);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
  }
    FinalData()    
   },[])
   if (loading) {
    return (
      <div className="bg-black h-screen">
        <NeonNavbar />
        <div className="text-white text-center pt-20">Loading...</div>
      </div>
    );
  }
    
  return (
    <div className='bg-black h-screen'>
      <NeonNavbar/>
    <div className='bg-white m-10 p-4 flex gap-4 text-black border border-black'>
        {products.map((product)=>(
        <div key={product._id}
        className='bg-white h-80 w-70 flex items-center justify-center border border-black'>
        {product.title}
        {product.image}
        {product.price}
      </div>
    ))}
    </div>


      </div>
  )
}

export default Products