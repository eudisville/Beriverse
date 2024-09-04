import React, { useEffect } from 'react'
import Header from '../components/Products/Header'
import AOS from "aos"
import 'aos/dist/aos.css';
import './pc.css'

function Services() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  return (
    <div>
      <Header/>
      <section className='software-section'>
        <div className="software-items" data-aos="fade-up">
          <div className="left">
            <h5>BERIVERSE SOFTWARE</h5>
            <h1>Software</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at maiores dignissimos qui facilis pariatur, fugit natus amet sapiente animi a dolorum iusto deserunt harum saepe repellat cupiditate repudiandae suscipit.</p>
          </div>
          <div className="right"></div>
        </div>
      </section>
      <section className='ia-section'>
        <div className="ia-items">
          <div className="right" data-aos="fade-left"
          >
            <h5>BERIVERSE AI</h5>
            <h1>Artficial Intelligence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className='software-section'>
        <div className="software-items" data-aos="fade-up" duration="1000">
          <div className="left">
            <h5>OUR CONTACT</h5>
            <h1>Contact Us </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at maiores dignissimos qui facilis pariatur, fugit natus amet sapiente animi a dolorum iusto deserunt harum saepe repellat cupiditate repudiandae suscipit.</p>
            <button>Contact Now</button>
          </div>
          <div className="right"></div>
        </div>
      </section>
    </div>
  )
}

export default Services;