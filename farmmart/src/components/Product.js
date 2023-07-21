import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Components.css';
import { ShopContext } from '../Context/Shopcontext';
import { ProductsData } from './Productsdata';
import { useContext } from 'react';
export const Product = (props) => {
  const {id,imgSrc, name,price,about}=props.data
  const [productInCart,setProductInCart]=useState([]);
   
  const {addToCart,cartItems}=useContext(ShopContext)
  const cartItemsAmount=cartItems[id]
  /////whatsapp contact feature////
  const WhatsAppLink = ({ phoneNumber, message, children }) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };
  // const addProductToCart=(product)=>{
  //   const newProduct={
  //     ...product,
  //     count:1, 
  //   };
  //   setProductInCart([...productInCart, newProduct])
  // }
  return (
    <>
    <div className='product-container'>
    <div className='products-card'>
    <div className='product'>
      <img className='product-pic ' src={imgSrc} alt='products'/> 
      <div className='product-description'>
      <h2 className='name'><b>{name}</b></h2>
      <p className='price'>Ksh.{price}</p>
      <p className='about'>{about}</p>
      </div>
      <div className='checkout-btn'>
      <WhatsAppLink class="whatsapp-link" phoneNumber="+254743666719" message="Hello, I have a question.">
        Make An Order
      </WhatsAppLink>
      {/* <button className="btn" onClick={()=>addToCart(id)}>Add To Cart {cartItemsAmount>0 &&<>({cartItemsAmount})</>} </button> */}
      </div>
      
      
     
    </div> 
    </div>
    </div>
    </>
  )
}