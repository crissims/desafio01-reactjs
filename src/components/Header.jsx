import styles from './Header.module.css'
import Logolist from '../assets/Logolist.svg'



export function Header() {
    return (
        
        <header className={styles.header}>
            <img src={Logolist} alt="To do List logo" />
                
                    
                
           </header>
    );  
}