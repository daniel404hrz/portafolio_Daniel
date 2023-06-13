import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './project.module.css'
export default function Cards({text, img,icons,link }){
    return(
        <div className="max-w-xs bg-black hover:scale-105 transform transition-transform border border-gray-100 rounded-lg shadow ">
    <a href={link} target="_blank">
        <img className="rounded-t-lg" src={img} alt="" />
    </a>
    <div className="p-5 relative">
        <a href={link} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
        </a>
            <ul>
                {icons.map((icon,index)=>{
                    return(
                        <div className='flex items-center absolute gap-4 bottom-8 right-3'>
                             <a href="https://github.com/daniel404hrz"  target="_blank" >
                        <FontAwesomeIcon className={styles.github_icon} icon={faGithub} />
                        </a>
                        <img className="rounded-lg w-16 " key={index} src={icon} alt='NOt_FOUND'></img>
                       
                        </div>
                    )
                })}
                
                

            </ul>
        
        <a href={link}target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ir al sitio web
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>
    )

}