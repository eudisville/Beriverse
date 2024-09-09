import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <h4>Beriverse &copy;2024</h4>
      </div>
      <div className="footer-right">
        <Link to="mailto:beriverse@gmail.com" target='_blank'><h5>Mail</h5></Link>
        <Link to="https://www.instagram.com/invites/contact/?igsh=1eal5624e03xb&utm_content=v0cmxbw" target='_blank'><h5>Instagram</h5></Link>
        <Link><h5>Twitter</h5></Link>
        <Link to="https://www.linkedin.com/company/103474168" target='_blank'><h5>LinkedIn</h5></Link>
      </div>
    </div>
  )
}

export default Footer