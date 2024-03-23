import style from './Registration-page.module.css'
import { Button } from '../button/HeroSectionBtn'

export const SignIn = ({reset, cache, login}) => {
    return (
        <div>
            <a href="#/password">{reset}</a>
        <div className={style.login}>
        <div className={style.checkbox}>                   
            <input type="checkbox" checked/>
            <div className={style.customCheckbox}></div>
            <label>{cache}</label>
        </div>
            <Button type="green"><h4>{login}</h4></Button>
        </div>
        </div>

    )
}