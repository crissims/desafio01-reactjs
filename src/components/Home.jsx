import styles from './Home.module.css'

import { Header } from './Header'

export function Home() {
    return (
        
        <Header>
            <div className={styles.input}>
                <input 
                type="text" 
                placeholder='Adcione uma nova tarefa'/>
            </div>
        </Header>

        
           
        
    ) 
   
}
   
    
    
   




