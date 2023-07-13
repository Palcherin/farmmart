import './Components.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class  Heropic extends Component {
 render() {
 return (
    <div className="heropic">
        <div className="heading" >
            <img src={this.props.img}/>
            <div className='heading-content'>
           <h1>{this.props.heading}</h1>
           <p>{this.props.text}</p> 
           <div className='home-btn'>
            <Link to='/products' className='btn'>Browse Products</Link>
            <Link to='/contact' className='btn-lit'>Ask For Help</Link>
            </div>
            
           </div>
           
        </div>
        
    </div>
  )
}
}