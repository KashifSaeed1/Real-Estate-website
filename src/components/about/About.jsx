import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Our real estate platform is designed to help you find the perfect property with ease and confidence. We offer a wide range of residential and commercial properties in prime locations, ensuring that every client finds a place that matches their lifestyle and budget. From modern apartments to luxury villas and office spaces, our listings are verified and regularly updated. Our experienced team is committed to providing transparent information, trusted guidance, and smooth transactions. Whether you are buying, selling, or renting, we make the entire process simple, secure, and efficient so you can focus on finding your dream property.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
