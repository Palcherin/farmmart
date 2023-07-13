import { Axios } from 'axios';
import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/Shopcontext'
import './Routes.css'

export const Payment = () => {
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const [phone,setPhone] =useState();
    const [amount,setAmount]=useState();
    const totalAmount=getTotalAmount();
    const WhatsAppLink = ({ phoneNumber, message, children }) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      };
      const PayHandler=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:5000/token ",{
            amount,
            phone
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error)
        })
      };
  return (
    <div className='payment-container'>
        <div className='payment'>
        <h1>Pay By M-pesa</h1>
            <form>
                
                <input placeholder='Phone' type="any" onChange={(e)=>setPhone(e.target.value)} required /><br/>
                <input placeholder={totalAmount} value={totalAmount} type="number" onChange={(e)=>setAmount(e.target.value)}  required min={10}/>
                <div className='payment-btn'>
                    <button className='btn2'>Make Payment</button><br/>
                    <h5>or contact us</h5>
                    <WhatsAppLink class="whatsapp-link" phoneNumber="+254743666719" message="Hello, I have a question.">
    Whatsapp us
  </WhatsAppLink>
                </div>
            </form>
        </div>
    </div>
  )
}
