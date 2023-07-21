import React from 'react' 
import { ProductsData } from '../components/Productsdata'
import { Product } from '../components/Product'
import './Routes.css'
import { Productphoto } from '../components/productphoto'

export const Products = (props) => {
  
  return (
    <>
    <div className='home-container'>
      
    <Productphoto/>
      {/* <div className='home-title'>
        <h1>Explore for <span>More</span></h1>
      </div> */}
      <div className='products'>
        {ProductsData.map((product)=> <Product data={product}/>)}
      </div>
      
        
    </div>
    </>
  )
}
// "lockfileVersion": 2,