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
                <h1>A Propos de Nous</h1>
                <p>Bienvenue chez Beriverse, votre partenaire technologique
                  de confiance basé en Côte d'Ivoire. Nous sommes une start-up
                  innovante spécialisé en développement de logiciel, APIs & Consulting.
                  Notre Mission, Inspirer et Transformer le Monde.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About