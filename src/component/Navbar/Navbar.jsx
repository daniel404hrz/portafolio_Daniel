import { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar({ navLinks,itemIndex }) {
  

  const activeButton = (event) => {
    navLinks(event);
 
  };
  return (
    <header className={styles.container}>
      <div className={styles.navs}>
        <button name={0} 
        style={{
            background: itemIndex === 0 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Inicio
        </button>
        <button
          name={1}
          style={{
            background: itemIndex === 1 ? "black" : "initial",
          }}
          onClick={activeButton}
        >
          Sobre mí
        </button>
        <button name={2} 
        style={{
            background: itemIndex === 2 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Proyectos
        </button>
        <button name={3} 
        style={{
            background: itemIndex === 3 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Contactos
        </button>
      </div>
    </header>
  );
}
