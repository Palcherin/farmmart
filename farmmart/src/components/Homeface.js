import React from 'react'

export const Homeface = () => {
  return (
    <div className="subscribe">
      <div className='sub-container'>
        <div className='sub-content'>
          <h2>Join Our Local Harvest</h2>
          <h5>Join your <strong>local food</strong> community through LocalHarvest.</h5>
          <p>1.Subscribe to our newsletter<br/>
             2.Receive announcements about local farm events and online promotions<br/>
             3.Write reviews of LocalHarvest members and products</p>
             <h5>If you're a farmer or farmers market manager, you can create a listing for your business.</h5>
        </div>
        <form className='sub-form'>
          <h2>Get the LocalHarvest Newsletter</h2>
          <div className='sub-form-content'>
          <label>Your Email </label><br/>
          <input type='email' placeholder='your email' /><br/>
          <button className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
