import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Card from '../components/Cards/Card'
import BlogCard from '../components/Cards/BlogCard'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './style.css'

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
        <Header />
        <About />
        <section className='middle'>
          <div className="section-items" data-aos= "fade-up">
            <div className="section-text">
              <div className="left">
                <h5>Beriverse Incorporation</h5>
                <h1>Beriverse solving major problems of our world</h1>
              </div>

              <div className="right">
                <p>From global problems to activities sectors problems,
                  we resolve many problems. 
                </p>
              </div>
            </div>

            <div className="cards">
              <Card />
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="team">
            <div className="team-text">
              <h5>WHAT WE DO</h5>
              <h1>Let Us Embark With Us</h1>
            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join" data-aos="fade-up">
            <h1>Join Us Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio vel recusandae ullam consequatur, minus, similique voluptates adipisci sequi odit, laudantium nostrum ratione temporibus placeat dignissimos ab accusamus veniam. Maxime.</p>
            <Link to=""><button>Apply Now</button></Link>
          </div>
        </section>

        <section className='blog'>
          <div className="blog-items">
            <h1>Stay up to date on our latest projects</h1>
            <p>We regularly share updates about our company, the development of the Amini platform, and research to advance our mission to becoming the single source of truth for African environmental data.</p>
            <div className="blog-item">
              <BlogCard className="back1">
                <h5>NEWS</h5>
                <h4>Artificial Intelligence</h4>
              </BlogCard>
              <BlogCard className="back2">
                <h5>RESEARCH</h5>
                <h4>Data Science</h4>
              </BlogCard>
              <BlogCard className="back3">
                <h5>NEWS</h5>
                <h4>Agriculture Technology</h4>
              </BlogCard>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home