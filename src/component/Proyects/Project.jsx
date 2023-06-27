import Cards from "./Cards"
import next from '../../image/logos/next.jpg'
import medCon from './img/medconnectfront.png'
import reactI from '../../image/logos/react.png'
import piFoods from './img/pi_foods.png'
import styles from './project.module.css'
import CardProject from "./CardProject"
import { useState } from "react"
export default function Proyects(){
    const[detail, setDetail]=useState(0)
    const clickFunc =(value)=>{
        setDetail(value)
        setClick(true)

    }
    const [click , setClick]= useState(false)
    const onClickButton=()=>{
        setClick(false)
      }

    return (
        <div className={styles.container}>
            <h1 className={styles.title_neon}>Proyectos</h1>
            
            <CardProject onClickButton={onClickButton} detail={detail} click={click}></CardProject>
            
        <div className={styles.cards}>
            <Cards clickFunc={clickFunc} value={0} text={'MedConnet'} img={medCon} icons={[next]} link={'https://medconnectfront-production.up.railway.app'}></Cards>
            <Cards clickFunc={clickFunc} value={1} text={'Pi-foods'} img={piFoods} icons={[reactI]} link={'https://pi-foods-daniel.vercel.app'}></Cards>
            
        </div>
        </div>
    )

}