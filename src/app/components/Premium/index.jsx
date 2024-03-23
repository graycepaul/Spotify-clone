import { features } from "./data"
import styles from './style.module.css'


export const PremiumFeatures = ()=>{
    
    return(
        <section className={styles.feature}>
            <h3>The Power of Premium</h3>
            <div className={styles.list}>
            {features.map((features)=>(
                <div className={styles.item}>
                    <img src ={features.image} alt=""/>
                    <div>
                    <h5 className={styles.titles}>{features.titles}</h5>
                    <p className={styles.description}>{features.description}</p>
                </div>  
             </div>
                
            ))}
            </div>
        </section>
    )
}