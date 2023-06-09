
import image from '../../image/dogGif/dog.gif'
import { useState } from 'react'
import styles from './styles.module.css'
export default function Dog({itemIndex}){
    const obj ={
        0:{ left: '0%'  },
        1:{ left: '15%' }
    }
    const [text,setText]= useState('')
    const [click, setClick]=useState(false)
    const clickDog=()=>{
        setText('*Wooof woof*')
        setClick(!click)

    }
    
    return(
        <div style={obj[itemIndex]} className={styles.container}>
        <div onClick={clickDog} className={click ? styles.boxText: styles.boxTextOff}>{text}</div>
        <img onClick={clickDog} src={image} alt="DogGif" className={styles.dogGIf}/>
        
        </div>
    )
}