import React from 'react'
import { BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import Navbar from './components/Navbars';
import { ShopContextProvider } from './Context/Shopcontext';
import { About } from './routes/About'
import { Cart } from './routes/Cart';
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'
import { Products } from './routes/Products';
import { Payment } from './routes/Payment';


const App = () => {

  return (
    <div>
      <ShopContextProvider>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/payment' element={<Payment />} /> */}
        </Routes>
        <Footer/>
        {/* <Navigate to="/"/> */}
      </ShopContextProvider>
      
      
    </div>
    

    
  )
}

export default App
