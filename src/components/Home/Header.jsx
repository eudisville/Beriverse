import React, { useEffect } from 'react'
import './Header.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Header() {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <div>
        <header>
            <div className="header">
                <div className="header-main" data-aos="fade-up">
                  <h1><span>Inspire</span> and <span>Transform</span> the World.</h1>
                  <p>Nous sommes Beriverse : Nous vous aidons à accélerer votre croissance digitale. </p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header