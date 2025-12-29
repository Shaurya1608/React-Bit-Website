import React from 'react'
import ProductsGrid from '../components/Products/ProductsGrid'

const SecondPage = () => {
  return (
    <div className='h-screen relative'>
    <div className=' h-1/2 '>
    <h1 className='text-4xl font-bold text-white  m-2'>Mens</h1>
    <div>
     <ProductsGrid/>
    </div>
    <div className=' h-1/2 w-full absolute'>
         <h1 className='text-4xl font-bold text-white  m-2'>Womens</h1>
        <div>
     <ProductsGrid/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SecondPage