import styles from './navbar.module.css'

export default function Navbar({navLinks}){
    return(
        <header className={styles.container}>
            <div className={styles.navs}>
                <button onClick={navLinks} name={0}>Inicio</button>
                <button onClick={navLinks} name={1}>Sobre mí</button>
                <button onClick={navLinks} name={2}>Proyectos</button>
                <button >Contactos</button>
            </div>
        </header>
    )
}