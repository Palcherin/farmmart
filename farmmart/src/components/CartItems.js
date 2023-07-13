import React,{useContext} from 'react'
import { ShopContext } from '../Context/Shopcontext';

export const CartItems = (props) => {
    const {id,imgSrc, name,price,about}=props.data
    const {cartItems, addToCart, removeFromCart,changeCartItems,deleteFromCart}=useContext(ShopContext);
    
  return (
    <div className='carts-items'>
        <img src={imgSrc}/>
        
        <div className='cartitems-info'>
            <p>{name} </p>
            <p>{about}</p>
            <span>Ksh.{price} </span>  
            
        </div>
        <div className='count-handler'>
              <button onClick={()=> addToCart(id)} className='add-btn'>+</button>
              <input value={cartItems[id]} onChange={(e)=>changeCartItems(Number(e.target.value),id)}/>
              <button onClick={()=> removeFromCart(id)} className='remove-btn' >-</button>
            </div>
            {/* <button onClick={()=>removeFromCart()}> <FaTimes onClick={()=>removeFromCart()}/> </button> */}
    </div>
  )
}
 