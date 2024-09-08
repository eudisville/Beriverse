import React, { useEffect } from 'react'
import './Header.css'
import Aos from 'aos';

function Header() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='software'>
        <div className="about-software" data-aos="fade-up">
            <div className="text">
                <h1>Découvrez Nos Services</h1>
                <p>
                  Chez BERIVERSE, nous offrons une gamme complète de services
                  technologiques conçus pour répondre aux besoins de votre entreprise.
                </p>
            </div>
        </div>
  </div>
  )
}

export default Header;