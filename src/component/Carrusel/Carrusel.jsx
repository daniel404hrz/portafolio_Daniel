import { useEffect, useState } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Dog from "../Dog/Dog";
import Proyects from "../Proyects/Project";
import Contact from "../Contact/Contact";
import styles from './carrusel.module.css';
import city_1 from '../../image/city/city_1.jpg'
import city_2 from '../../image/city/city_2.png'
import city_3 from '../../image/city/city_3.jpg'
import city_4 from '../../image/city/city_4.jpg'
export default function Carrusel() {
  const [itemIndex, setItemIndex] = useState(0);
  const array = [<Home />, <About />, <Proyects />, <Contact/>];
  const backGrounds = [city_1,city_2,city_3,city_4]
  const navLinks = (event) => {
    const num = event.target.name;
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
  console.log(image);
  return (
    <div className={styles.backGround} style={{ backgroundImage: `url(${image})` }}>
      <Navbar navLinks={navLinks}></Navbar>
      {currentItem}
      <Dog itemIndex={itemIndex}></Dog>
    </div>
  );
}
