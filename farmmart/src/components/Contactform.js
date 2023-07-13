import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Components.css'
import {db } from '../confi/firebase'
import firebase from 'firebase/app'
import { getDocs, collection, addDoc} from 'firebase/firestore';

export const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const textCollectionRef = collection(db, "contactform");
      await addDoc(textCollectionRef, {
        Name: name,
        Email: email,
        Subject: subject,
        Text: text
      });

      // Clear the form inputs after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  const WhatsAppLink = ({ phoneNumber, message, children }) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };
  return (
    <div className='contact-form'>
      <div className='contact-intro'>
        <h1>Contact Us</h1>
        </div>
        <div>
        <div className='inqury-container'>
        <div className='contactpic'>
            <img src='assets/contact-pic.jpg'/>
          </div>
          <div className='contactinfo'>
            <h4>Reach out to us!</h4>
            <p>Whenever you have any inquiries about our company dont hesitate to react out to us. Reach us on whatsapp or call: 0788354432. You can also fill the form below and we will et back to you</p>
          </div>
         
        </div>
      </div>
        <div className='contact-container'>
            <form >
            <h2>get in touch</h2>
            <div className='identity'>
                <input type='text' value={name} placeholder='Your Name...'  onChange={(e)=>setName(e.target.value)}/>
                <input type='text' value={email} placeholder='Your email...'  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='more-info'>
            <input type='text' value={subject} placeholder='subject..'  onChange={(e)=>setSubject(e.target.value)}/><br/>
            <textarea value={text} placeholder="What's on your mind..."  onChange={(e)=>setText(e.target.value)}/>
            <button className='btn' type="submit" onClick={submitHandler}>Send</button>
            </div>
            </form>
            <div className='adress-container'>
                <h3>Contact info</h3>
                <p>Farmmart ltd</p>
                <p>Kericho</p>
                <p>Alon Kericho Kisumu road</p>
                <p>Tell: +25478883534728</p>  
                <p>Email:farmmart@info.com</p>
                <p>Whatsapp:+254788835348</p>
                <div className='checkout-btn'>
      <WhatsAppLink class="whatsapp-link" phoneNumber="+254743666719" message="Hello, I have a question.">
        Whatsapp us
      </WhatsAppLink>
      {/* <button className="btn">Add To Cart</button> */}
      </div>
            </div>
        </div>
    </div>
  )
}
