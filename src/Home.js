import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
       <h1 className='home-heading'>Home</h1>
       <Navbar item1="Home" item2="About us" item3="Contact Us" item4="Faq"/>
       <Form />
    </div>
  )
}
