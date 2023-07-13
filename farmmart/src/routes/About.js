import React from 'react'
import { Aboutus } from '../components/About-us'
import { Heropic } from '../components/Heropic'

export const About = () => {
  return (
    <div>
      <Heropic img='assets/aboutpic.jpg' heading='ABOUT FARMMART' text='You have questions about farmmart? Reach out to us for full explanation of our services and products. Ask your questions below'
      />
      <Aboutus/>
    </div>
  )
}
