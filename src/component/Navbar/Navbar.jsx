import styles from "./navbar.module.css";

export default function Navbar({ navLinks,itemIndex }) {
  

  
  return (
    <header className={styles.container}>
      <div className={styles.navs}>
        <button 
        style={{
            background: itemIndex === 0 ? "black" : "initial",
          }}
        onClick={ ()=>navLinks(0)}
        >
          Inicio
        </button>
        <button
          
          style={{
            background: itemIndex === 1 ? "black" : "initial",
          }}
          onClick={()=>navLinks(1)}
        >
          Sobre mí
        </button>
        <button 
        style={{
            background: itemIndex === 2 ? "black" : "initial",
          }}
        onClick={()=>navLinks(2)}>
          Proyectos
        </button>
        <button 
        style={{
            background: itemIndex === 3 ? "black" : "initial",
          }}
        onClick={()=>navLinks(3)}>
          Contactos
        </button>
      </div>
    </header>
  );
}
