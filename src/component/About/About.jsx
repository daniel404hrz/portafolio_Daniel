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
            Desarrollador web Full Stack con experiencia en la creación de aplicaciones y sitios web completos, desde la interfaz de usuario hasta la base de datos. Especializado en React, he trabajado en proyectos avanzados que me han permitido profundizar mis conocimientos en esta popular biblioteca de JavaScript para crear interfaces de usuario. 
           
           </p>
           
            </section>
          
           
            <section onClick={onClickTech} className={styles.box_tech}>
            <h3 className={styles.tech_title}>Tecnologias</h3>

            <div className={click ? styles.arrow_on:styles.arrow_box}>
                {click ?<FontAwesomeIcon className={styles.arrow_icon} icon={faAngleRight} /> :
                 <FontAwesomeIcon className={styles.arrow_icon} icon={faAngleLeft} />}
           
           <div className={styles.grid_img}>
            {click && arrLogos.map((logo, index) => (
        <img
          className={index === 4 ?styles.logo_ancho: styles.logos} // Aplica la clase de estilos CSS al elemento img
          key={index}
          src={logo} // Utiliza require para importar las imágenes
          alt="NOT_FOUND"
        />
      ))}
      </div>
           
           
            </div>
            
            </section>
            
            
            
        </div>
    )
}