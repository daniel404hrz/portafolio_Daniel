import { useEffect, useState } from "react";
import styles from "./project.module.css";
export default function CardProject({ detail,click, onClickButton }) {
  const [data, setData] = useState({
    title: "",
    summary: "",
  });
  
  
  useEffect(() => {
    switch (detail) {
      case 0:
        setData({
          ...data,
          title: "MedConnet",
          summary:
            "Diseño y desarrollo en equipo de  una App de citas médicas con  autenticación, búsquedas, filtrados combinados, ordenamientos, baneo de usuarios, envío de emails, reservar y pagar las citas mediante el uso de mercado pago.",
        });
        break;
      case 1:
        setData({
          ...data,
          title: "Pi-Foods",
          summary:
            "En esta página, podrás encontrar una amplia variedad de opciones de comida a través de nuestras cards de comida interactivas. Con nuestra función de filtrado, podrás elegir entre diferentes tipos de dietas, como vegetariana, vegana, baja en carbohidratos y más. ¡La elección es tuya!",
        });
        break;
      default:
        break;
    }
  }, [detail]);
  
  return (
    <div className={click ? styles.summary : styles.summary_of}>
      <button onClick={()=>onClickButton()} className={styles.close_button}>X</button>
      <h1>{data.title}</h1>
      <p>{data.summary}</p>
    </div>
  );
}
