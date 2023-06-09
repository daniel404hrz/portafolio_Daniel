import Cards from "./Cards"
import next from '../../image/logos/next.jpg'
import medCon from './img/medconnectfront.png'
import reactI from '../../image/logos/react.png'
import piFoods from './img/pi_foods.png'
import styles from './project.module.css'
export default function Proyects(){
    return (
        <div className={styles.container}>
            <Cards text={'MedConnet'} img={medCon} icons={[next]} ></Cards>
            <Cards text={'pi-foods'} img={piFoods} icons={[reactI]}></Cards>
            
        </div>
    )

}