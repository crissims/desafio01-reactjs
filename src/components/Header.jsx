import styles from './Header.module.css'
import { Logo } from '../assets/logo';

export function Header() {
    return (
        
        <header className={styles.header}>
            
            <Logo />
        
        </header>
    );  
}