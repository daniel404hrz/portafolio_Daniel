import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import styles from './about.module.css'
import { useState } from 'react';
import next from '../../image/logos/next.jpg'
import postG from '../../image/logos/postgresql.png'
import reactI from '../../image/logos/react.png'
import redux from '../../image/logos/redux.png'
import trio from '../../image/logos/trio.png'
import vite from '../../image/logos/vite.png'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function About(){
    const arrLogos = [next,postG,reactI,redux,trio,vite]
    
    const [click, setClick]= useState(false)
    const onClickTech=()=>{
        setClick(!click)
    }
     
    return (
        <div className={styles.container}>
            <section className={styles.info}>
            <h1 className={styles.title_neon}>Sobre mí</h1>
                <p className={styles.text}>
           <b>Full Stack Web Developer</b> Especializado en React, he trabajado en proyectos avanzados que me han permitido profundizar mis conocimientos en esta popular biblioteca de JavaScript para crear interfaces de usuario. 
           
           </p>
           
            </section>
          <section className={styles.contactos}>
          <a  href="https://www.linkedin.com/in/daniel-hern%C3%A1ndez-236165259/" target="_blank" >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            
          </a>
          <a href="https://github.com/daniel404hrz" target="_blank" >
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />

            
          </a>
          </section>
           
            <section onClick={onClickTech} className={styles.box_tech}>
            <h3 className={styles.tech_title}>Tecnologias </h3>

            <div className={click ? styles.arrow_box: styles.arrow_of } >
                {click ?<FontAwesomeIcon className={styles.arrow_icon} icon={faAngleRight} /> :
                 <FontAwesomeIcon className={styles.arrow_icon} icon={faAngleLeft} />}
           
           <div className={styles.grid_img}>
            {click &&  arrLogos.map((logo, index)=>{
                return <img
                className={index === 4 ? styles.logo_ancho: styles.logos} 
                key={index}
                src={logo} 
                alt="NOT_FOUND"
              />
            })}
      </div>
           
           
            </div>
            
            </section>
            
            
            
        </div>
    )
}