import React from 'react'
import { FaBars, } from 'react-icons/fa'

export const Whyua = () => {
  return (
    <div className='whyus-container'>
        <h1>We incorporate a range of services uniquely designed to improve 
your member health outcomes, including:  </h1>
<div className='whyus-content'>
    <div className='health'>
        <feGaussianBlur/>
        <h4>Health Literacy
Resources</h4>
        <p>Accessible educational materials to empower individuals with knowledge and promote informed decision-making – branded and voiced from your plan!</p>
    </div>
    <div className='nutrition'>
        <h4>Strategic
Design</h4>
        <p>Support from our inhouse team of Compliance, Stars, and Product experts to develop programs which meet the unique needs of your membership and the goals of your organization.</p>
    </div>
    <div className='compliance'>
        <h4>Customizable NutritionSolutions</h4>
        <p>Tailored nutrition programs (in food & produce, meals at hospital discharge, and meals beyond a limited basis) that address acute and chronic specific health conditions and dietary needs.</p>
    </div>
    <div className='security'>
        <h4>Secure & 
Aligned</h4>
        <p>Committed to upholding the highest standards of compliance and regulatory adherence in all our programs and service delivery. We design our programs to align with industry regulations.</p>
    </div>
</div>
<button className='btn'>Learn More</button>
    </div>
  )
}
