import { Button } from "../button/HeroSectionBtn";
import style from './pricing-card.module.css';

const cardContent = [
    { trial: "one-time plans available", planName: "Mini", description: "1 account on mobile only", id: 0 },
    { free: "1 month free", trial: "one-time plans available", planName: "Individual", description: "₹119/month after offer period 1 account", id: 1 },
    { free: "1 month free", trial: "one-time plans available", planName: "Duo", description: "₹149/month after offer period 2 accounts", id: 2 },
    { free: "1 month free", trial: "one-time plans available", planName: "Family", description: "₹179/month after offer period Up to 6 accounts", id: 3 },
];

const features = [
    { item: "For couples who live together", plan: "View Plans", id: 0 },
    { item: "Ad-free music listening", plan: "View Plans", id: 1 },
    { item: "Group Session", plan: "View Plans", id: 2 },
    { item: "Download 10k songs/device, on 5 devices per account", plan: "View Plans", id: 3 },
];

export const PricingCardItem = () => {
    return (
        <div className={style.flex}>
            {cardContent.map((card) => {
                return (
                    <div className={style.card}>
                        <div>
                    <div className={style.header} key={card.id}>
                        <span className={style.free}>{card.free}</span>
                        <span className={style.onetime}>{card.trial}</span>
                        <h4 className={style.planName}>{card.planName}</h4>
                        <p>{card.description}</p>
                        </div>
                        <div className={style.content}>
                        <ul>
                            {features.map((feature) => {
                                return (
                                    <li key={feature.id}>
                                        <p>{feature.item}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={style.plan}>
                            <Button className={style.primary} type="primary" onClick={() => { }}>View Plan</Button>
                         </div>

                        </div>
                 
                    </div>
                    <div className={style.footer}>
                        <a href="#/">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.
                    </div>
                    </div>
                )
            })}
        </div>
    );
};

