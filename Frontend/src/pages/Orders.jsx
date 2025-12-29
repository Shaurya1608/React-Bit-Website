import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getOrders } from '../services/orderApi';
import NeonNavbar from '../components/Navigation/NeonNavbar';

const Orders = () => {
    const[orders , setOrders] = useState([]);
    const[Loading,setLoading] = useState(true);

    useEffect(()=>{
        const FetchOrders = async ()=>{
            try {
                const theOrder = await getOrders();
                setOrders(theOrder);
            } catch (error) {
                return res.status(500).json({message: error.message})
            } finally{
                setLoading(false);
            }
        }
        FetchOrders();
    }
    ,[]);
     if(Loading) {
        return (
          <div className="bg-black h-screen">
            <NeonNavbar />
            <div className="text-white text-center pt-20">Loading...</div>
          </div>
        );
      }



  return (
    <div className='bg-black h-screen flex flex-wrap grid-cols-3'>
        <NeonNavbar/>
            {orders.map((ordering)=>(
                <div className='bg-red-200 h-80 w-70 m-5'>
                    {ordering.name}
                    {ordering.productId}
                    
                </div>
            ))}
        
    </div>
  )
}

export default Orders