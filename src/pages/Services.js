import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
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
            <h1>Logiciel & Application</h1>
            <p>Nous fournissons des solutions logicielles personnalisées qui répondent
              aux besoins uniques de votre entreprises 
            </p>
          </div>
          <div className="right"></div>
        </div>
      </section>
      <section className='ia-section'>
        <div className="ia-items">
          <div className="right" data-aos="fade-up"
          >
            <h5>BERIVERSE AI</h5>
            <h1>Intelligence Artificielle</h1>
            <p>Avec l'emergence de l'IA, il est tellement facile de faire mille et une choses
              en peu de temps. Et nous sommes là pour vous aider à mettre en place des processus
              alimentés par l'Intelligence Artificielle.
            </p>
          </div>
        </div>
      </section>
      <section className='software-section'>
        <div className="software-items" data-aos="fade-up" duration="1000">
          <div className="left">
            <h5>NOTRE CONTACT</h5>
            <h1>Contactez Nous</h1>
            <p>
              Des renseignements ou préoccupation ? Ecrivez-nous.
            </p>
            <Link to="mailto:beriverse@gmail.com" target='_blank'><button>Contacter</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;