import style from  './HeroBtn.module.css'
import { Button } from '../button/HeroSectionBtn'


 export const HeroSection = (props) =>{
    return(
        <section className={`${style.heroSection} ${props.className} ${props.type}`}>
                <h1 className={style.title}>      
               {props.title || "Get Premium free for 1 month"}</h1>
                <p className= {style.description}> {props.description || "Just ₹119/month after. Debit and credit cards accepted. Cancel anytime."}</p>

            <div className={style['button-group']}>
                <Button type = "btns">Get started</Button>
                <Button type = 'outline'>see other plans</Button>
            </div>

            <div className={style.terms}>
                <a href="#/">Terms and conditions apply. </a> 
                <p> 1 month free not available for users who have already tried Premium.</p>
            </div>
        </section>
    )
}
