import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './project.module.css'
export default function Cards({clickFunc,text, img,icons,link,value}){
    return(
        <div className="max-w-xs bg-black hover:scale-105 transform transition-transform border border-gray-100 rounded-lg shadow ">
    <button onClick={()=>clickFunc(value)}  target="_blank">
        <img className="rounded-t-lg" src={img} alt="" />
    </button>
    <div className="p-3 relative">
        <a href={link} target="_blank">
            <h5 className={styles.title_card}>{text}</h5>
        </a>
            <ul>
                {icons.map((icon,index)=>{
                    return(
                        <div key={index} className='flex items-center absolute gap-4 bottom-8 right-3'>
                             <a href="https://github.com/daniel404hrz"  target="_blank" >
                        <FontAwesomeIcon className={styles.github_icon} icon={faGithub} />
                        </a>
                        <img className={"rounded-lg "+ styles.icono} key={index} src={icon} alt='NOt_FOUND'></img>
                       
                        </div>
                    )
                })}
                
                

            </ul>
        
        <a href={link}target="_blank" className={styles.button_Card}>
            ir al sitio web
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>
    )

}