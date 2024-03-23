import style from './Registration-page.module.css'
import { Button } from '../button/HeroSectionBtn'


export const SignUp = ({title, register}) => {
    return (
        <div className={style.signUp}>
            <h4>{title}</h4>
            <Button type="grey">{register}</Button>
        </div>
    )
}