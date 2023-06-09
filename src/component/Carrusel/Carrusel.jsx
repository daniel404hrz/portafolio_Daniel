import { useEffect, useState } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Dog from "../Dog/Dog";
import Proyects from "../Proyects/Project";
import Contact from "../Contact/Contact";
import styles from "./carrusel.module.css";

export default function Carrusel() {

  const [itemIndex, setItemIndex] = useState(0);
  const array = [<Home  />, <About />, <Proyects />, <Contact />];
  const clondURL= 'https://res.cloudinary.com/dwixaelcd/image/upload/f_auto,q_auto/v1/Portafolio/'
  const backGrounds = [
    `${clondURL}s7ho9j7ursp1w7azsbhz.jpg`,
    `${clondURL}omeco7pfbpthmotvxy7n.png`,
    `${clondURL}miqktlpfuprgdgsqfa2c.jpg`,
    `${clondURL}fqdbug5rojbn5ncbol6i.jpg`,
  ];
  
    
  const navLinks = (num) => {
    
    const index = parseInt(num, 10);
    
    setItemIndex(index);
  };
  

  useEffect(() => {
    const handleWheel = (event) => {
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Desplazamiento hacia abajo (scroll positivo en y)
        if (itemIndex < array.length - 1 && deltaY > 80) {
          setItemIndex(itemIndex + 1);
        }
      } else if (deltaY < 0) {
        // Desplazamiento hacia arriba (scroll negativo en y)
        if (itemIndex > 0 && deltaY < -80) {
          setItemIndex(itemIndex - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [itemIndex]);

  const currentItem = array[itemIndex];
  const image = backGrounds[itemIndex];
  
  return (
    <div
      className={styles.backGround}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Navbar navLinks={navLinks} itemIndex={itemIndex}></Navbar>
      {currentItem}
      <Dog itemIndex={itemIndex}></Dog>
    </div>
  );
}
