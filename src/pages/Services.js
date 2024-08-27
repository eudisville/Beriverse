import React from 'react'
import Header from '../components/Products/Header'
import './pc.css'

function Services() {
  return (
    <div>
      <Header/>
      <section className='software-section'>
        <div className="software-items">
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
          <div className="right">
            <h5>BERIVERSE AI</h5>
            <h1>Artficial Intelligence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className='software-section'>
        <div className="software-items">
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