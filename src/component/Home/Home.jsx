import { useEffect, useState } from 'react'

import styles from './home.module.css'

export default function Home(){
    const [name, setName]=useState('')
    const nameUser ='Daaniel Hernández';
    
    
    useEffect(() => {
      
        let current = 0;
        const intervalName = setInterval(() => {
          if (current < nameUser.length - 1) {
            setName((prevLetter) => prevLetter + nameUser[current]);
            current++;
          } else {
            clearInterval(intervalName);
          }
        }, 130);
    
        return () => {
          clearInterval(intervalName); // Limpiar el intervalo cuando el componente se desmonta
          
          
        };
      
    }, []);


    
    return(

        <div className={styles.homeContainer} >
          
            <div className={styles.container}>
            <h1 className={styles.title_neon}>Inicio</h1>
            <h1 className={styles.title}>{name}</h1>
            <section className={styles.info}>
            <div className={styles.info_items}>
            <h2>Bienvenid@ a mi portafolio como Full-stack web developer</h2>
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