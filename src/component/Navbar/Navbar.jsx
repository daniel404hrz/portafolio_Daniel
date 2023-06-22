import { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar({ navLinks }) {
  const [active, setActive] = useState(0);

  const activeButton = (event) => {
    navLinks(event);
    
    const index = parseInt(event.target.name);
    setActive(index);
  };
  return (
    <header className={styles.container}>
      <div className={styles.navs}>
        <button name={0} 
        style={{
            background: active === 0 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Inicio
        </button>
        <button
          name={1}
          style={{
            background: active === 1 ? "black" : "initial",
          }}
          onClick={activeButton}
        >
          Sobre mí
        </button>
        <button name={2} 
        style={{
            background: active === 2 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Proyectos
        </button>
        <button name={3} 
        style={{
            background: active === 3 ? "black" : "initial",
          }}
        onClick={activeButton}>
          Contactos
        </button>
      </div>
    </header>
  );
}
