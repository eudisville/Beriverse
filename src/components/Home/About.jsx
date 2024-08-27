import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './About.css'

function About() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className='about'>
        <div className="about-main">
            <div className="about-text" data-aos= "fade-right">
                <h1>About Us</h1>
                <p>Beriverse Incorporation is a technological company which grow
                  in Software Development, Artificial Intelligence and IoT. 
                  Our mission is Inspire and Transform the World. This mission means
                  we are open to resolve our current problems.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About