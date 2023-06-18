import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import { verify } from "./verify";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { intervalTitle } from "./intervalTitle";
export default function Contact() {
  const [alerts, setAlerts] = useState({
    alert:false,
    alert_text:'Corrige todos los campos para continuar.',
    success:false,
    success_text:'¡Se completo el envio del formulario, gracias!'
  });
  const [title, setTitle] = useState("");
  
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    verify({ ...values, [name]: value }, name, setError);
  };
  

  const sendEmail = (e) => {
    e.preventDefault();
    if(Object.values(values).every(valor => valor !== "")){
      emailjs
      .sendForm(
        "service_dlriuup",
        "template_a8hffzj",
        e.target,
        "0NNdcfMgV2cCQRzDY"
        )
        .then(()=>{
          setAlerts({...alerts,alert:false,success:true})
          setValues({
            user_name: "",
            user_email: "",
            message: "",
          });

        })
        

    }
    else{
      setAlerts({...alerts,alert:true,success:false})
      for (let clave in values) {
        verify(values,clave,setError)  
      }
      
    }
    
  };
  useEffect(() => {
    intervalTitle(setTitle);
  }, []);

  return (
    <div className={styles.container}>
     
      {(alerts.alert || alerts.success) && (
        <div
        onClick={() => setAlerts({...alerts,alert:false,success:false})}
          id="alert-2"
          className={
            "z-40 flex p-4 mb-4 text-white rounded-lg " +
            (alerts.alert ? styles.alert : styles.success)
          }
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">{alerts.alert ?'Alerta':'Exito'}</span>
          <div className={styles.alert_text}>
            <p>
              {alerts.alert ? alerts.alert_text: alerts.success_text}
            </p>{" "}
            <span>Da click a la alerta para cerrarla.</span>
          </div>
          <button
            onClick={() => setAlerts({...alerts,alert:false,success:false})}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-black text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8  dark:text-red-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-2"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}

      <form onSubmit={sendEmail} className={styles.form}>
        <h1>Contáctame por gmail</h1>
        <div>
          <label htmlFor="name">Nombre:*</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={values.user_name}
            onChange={handleChange}
          />
          <span className="text-rose-600">{error.user_name}</span>
        </div>
        <div>
          <label htmlFor="Email">Email:*</label>
          <input
            type="text"
            id="Email"
            name="user_email"
            value={values.user_email}
            onChange={handleChange}
          />
          <span className="text-rose-600">{error.user_email}</span>
        </div>
        <div>
          <label htmlFor="Menssage">Mensaje:*</label>
          <textarea
            id="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          <span className="text-rose-600">{error.message}</span>
        </div>
        <button type="submit" value="Send">
          Enviar correo
        </button>
      </form>
      
      <section className={styles.contactos}>
      <h2 className={styles.title}>{title}</h2>
        <a
          href="https://www.linkedin.com/in/daniel-hern%C3%A1ndez-236165259/"
          target="_blank"
          className={styles.button_linkedin}
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          Contactame en Linkedin.
        </a>
      </section>
    </div>
  );
}
