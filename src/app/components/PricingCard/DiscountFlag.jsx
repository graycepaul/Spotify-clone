import { Button } from "../button/HeroSectionBtn"
import style from './pricing-card.module.css'

export  const DiscountFlag = () =>{
    return(
        <div className={style.discount}>
            <p>Special discount for eligible student in university</p>
            <Button props={style.tertiary} onClick={()=>{}} type='tertiary'>learn more</Button>
        </div>
    )
}