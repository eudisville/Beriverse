import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Card from '../components/Cards/Card'
import BlogCard from '../components/Cards/BlogCard'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './style.css'
import Service from '../components/Cards/Service'

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
                <h1>Beriverse vous aide dans votre croissance numérique</h1>
              </div>

              <div className="right">
                <p>
                  A la l'ère des nouvelles technologies, il est important pour nous de vous aider à
                  établir des solutions technologiques pour l'optimisation de vos processus. 
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
              <h5>CE QUE NOUS FAISONS</h5>
              <h1>Laissez Nous vous Embarquer</h1>
              <div className="team-card">
                <Service>
                  <h2>Logiciels & Applications</h2>
                  <p>Nous concevons des logiciels sur mesure et des applications robustes pour répondre aux besoins spécifiques de votre entreprise. Que ce soit pour le web, le mobile (iOs & Android) ou le desktop, nous créons des solutions efficaces et évolutives qui améliorent vos performances.</p>
                </Service>
                <Service>
                  <h2>Site Web</h2>
                  <p>Nous développons des sites web modernes qui mettent en valeur votre activité en ligne. Qu'il s'agisse de sites vitrines, e-commerce ou blogs, nous vous offrons une expérience utilisateur optimale et un design soigné.</p>
                </Service>
                <Service>
                  <h2>API</h2>
                  <p>Nous développons des API sécurisées et performantes pour connecter vos systèmes et faciliter l'intégration de vos services. Nos solutions API RESTful ou GraphQL assurent une communication fluide entre vos différentes plateformes.</p>
                </Service>
                <Service>
                  <h2>Formation</h2>
                  <p>Nous offrons des formations personnalisées en programmation et technologies numériques. Que vous soyez débutant ou expérimenté, nous vous aidons à acquérir de nouvelles compétences et à maîtriser les outils essentiels pour votre carrière.</p>
                </Service>
              </div>
            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join" data-aos="fade-up">
            <h1>Rejoignez Nous</h1>
            <p>Vous êtes passionnés par les technologies et souhaitez
              faire partie d'une équipe dynamique ? Chez Beriverse, nous
              recherchons des talents motivés et créatifs pour rejoindre
              notre équipe. Postulez dès maintenant pour faire partie
              de notre aventure technologique.
            </p>
            <Link to="mailto:beriverse@gmail.com"><button>Postuler</button></Link>
          </div>
        </section>

        <section className='blog'>
          <div className="blog-items">
            <h1>Restez informez de nos derniers projets</h1>
            <p>Nous publions regulièrement les nouveaux projets et collaboration de Beriverse.</p>
            <div className="blog-item">
              <BlogCard className="back1">
                <h5>TECHNOLOGY</h5>
                <h4>MARTONE</h4>
              </BlogCard>
              <BlogCard className="back2">
                <h5>3D ANIMATION</h5>
                <h4>NFT</h4>
              </BlogCard>
              <BlogCard className="back3">
                <h5>MOTION DESIGN</h5>
                <h4>EARTH</h4>
              </BlogCard>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home