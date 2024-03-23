import { paymentMethods, pricingList } from "./data"
import { PricingCardItem } from "./pricingCard"
import style from './pricing-card.module.css'
import { DiscountFlag } from "./DiscountFlag"

export const PricingCardSection = () =>{
    const renderPaymentMethod = (method) =>{
        if(method.icon) return < img src ={method.icon} alt=""/>
        return null

    }
    return(
        <section className={style.section}>
             <h1 className={style.title}>Pick your Premium</h1>
             <p className={style.description}>Listen without limits on your phone, speaker, and other devices.</p>
             <div className={style.flex}>
             {
                paymentMethods.map((renderPaymentMethod))
                  }
            
             </div>
             <br />
             <br />
             <div className={style.flex}>
                <PricingCardItem />
             </div>
             <br />
             <br />
             <DiscountFlag/>
        </section>
    )
}