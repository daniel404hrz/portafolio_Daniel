import { useEffect, useState } from 'react'
import img from '../../image/Daniel.png'
import styles from './home.module.css'

export default function Home(){
    const [name, setName]=useState('')
    const nameUser ='Daniel Hernández';
    
    
    useEffect(() => {
      
        let current = 0;
        let currentText='';
        const intervalName = setInterval(() => {
          if (current < nameUser.length) {
            currentText += nameUser[current];
            setName(currentText);
            current++;
          } else {
            clearInterval(intervalName);
          }
        }, 200);
    
        return () => {
          clearInterval(intervalName); // Limpiar el intervalo cuando el componente se desmonta
          
          
        };
      
    }, []);


    
    return(

        <div className={styles.homeContainer} >
          
            <div className={styles.container}>
              
            <h1 className={styles.title_neon}>Inicio</h1>
            <div className={styles.title_box}><h1 className={styles.title}>{name}<span className={styles.cursor}></span></h1>
            <img className='w-40 h-40  rounded-full shadow-lg' src={img} alt="NOT_FOUND" />
            </div>
            <section className={styles.info}>
            <div className={styles.info_items}>
            <h2>Desarrollador web Full Stack con experiencia en la creación de aplicaciones y sitios web completos, desde la interfaz de usuario hasta la base de datos.</h2>
            <a target='_blank' href="https://drive.google.com/file/d/13dsXGjAE4uiIrOfXcxMU9RXXuGhFS63S/view?usp=sharing" className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 "></span>
<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen "></span>
<span className="relative">Descargar CV</span>
</a>   </div> 
            </section> 
           
            
            </div>
            

        </div>
    )

}