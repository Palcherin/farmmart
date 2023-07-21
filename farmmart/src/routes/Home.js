import React from 'react' 
import { ProductsData } from '../components/Productsdata'
import { Product } from '../components/Product'
import './Routes.css'
import { Productsdata } from '../components/Productsdata'
import { Homepic } from '../components/Homepic'
import { Photo } from '../components/photo'
import { Heropic } from '../components/Heropic'
import { Homeface } from '../components/Homeface'
import { Whyua } from '../components/Whyua'
import { Customers } from '../components/Customers'

export const Home = (props) => {
  
  return (
    <>
    
    <Heropic img='assets/home-photo.jpg' heading='YOU ARE AT THE RIHT PLACE' text='Welcome to farmmart. Your number one online farm products store . We have all the products solutions you are lookin for. Reach out to us and explore more about availabel products'/>
    <Homepic/>
    <Whyua/>
    
    <Homeface/>
    
   
    </>
  )
}