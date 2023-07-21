import React from 'react'
import './Components.css'

export const Customers=() =>{
    return(
        <div className='customers'>
            <div className='customers-container'>
                <div className='farmers-cust'>
                    <span>200+</span>
                    <p>Farmers</p>
                </div>
                <div className='farmers-cust'>
                    <span>1200+</span>
                    <p>Consumers</p>
                </div>
                <div className='farmers-cust'>
                    <span>150+</span>
                    <p>Sellers</p>
                </div>
            </div>
        </div>
    )
}