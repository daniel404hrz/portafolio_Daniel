import { useEffect, useState } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Dog from "../Dog/Dog";
import Proyects from "../Proyects/Project";
export default function Carrusel() {
  const [itemIndex, setItemIndex] = useState(0);
  const array = [<Home />, <About />, <Proyects />];
  const navLinks = (event) => {
    const num = event.target.name;
    const index = parseInt(num, 10);
    setItemIndex(index);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      const deltaY = event.deltaY;
      console.log(deltaY);

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

  return (
    <div>
      <Navbar navLinks={navLinks}></Navbar>
      {currentItem}
      <Dog itemIndex={itemIndex}></Dog>
    </div>
  );
}
