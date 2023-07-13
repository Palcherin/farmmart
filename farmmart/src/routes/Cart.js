import React, {useContext} from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { ProductsData } from '../components/Productsdata'
import { CartItems } from '../components/CartItems';
import './Routes.css'
import { Link } from 'react-router-dom';



export const Cart = () => {
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const totalAmount=getTotalAmount();
    const WhatsAppLink = ({ phoneNumber, message, children }) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      };
  return (
    <div className='cart'>
        <div className='Cart-header'>
            <h1>Your cart items</h1>
        </div>
        <div className='cart-items'> 
        {ProductsData.map((product)=>{
            if (cartItems[product.id] !==0){
                return (<>
                <CartItems data={product} /> 
               </>
                )
            }
        })}
        </div>
        {totalAmount>0?(
        <div className='checkout-container'>
            
        <p>subtotal:Ksh.{totalAmount} </p>
        <div className='checkoutbtn'>
        <Link to="/payment" className='btn-lit1'>Checkout</Link>
        <WhatsAppLink class="whatsapp-link" phoneNumber="+254743666719" message="Hello, I have a question.">
    Whatsapp us
  </WhatsAppLink>
        </div>
      
    </div>): (<span>Your cart is empty</span>)
        }
        
       </div>
  
  )
}
