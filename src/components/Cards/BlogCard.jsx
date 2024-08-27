import React, { useEffect } from 'react'
import './Blog.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Blog = ({ className, children }) => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

    return (
      <div className={`blog-card ${className}`} data-aos="zoom-in">
        {children}
      </div>
    );
  };

export default Blog