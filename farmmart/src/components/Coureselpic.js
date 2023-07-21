import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

    export class  Coureselpic extends Component {
        render() {
        return (
           <div className="couresel">
               <div className="heading" >
                   <img src={this.props.img}/>
                   <div className='couresel-heading-content'>
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p> 
                  <div className='home-btn'>
                   <Link to='/contact' className='btn-lit'>Ask For Help</Link>
                   </div>
                   
                  </div>
                  
               </div>
               
           </div>
         )
       }
       }