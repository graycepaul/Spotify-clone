import LogoBlack from '../../assets/images/logo-black.png';
import { SignIn } from './Login';
import style from './Registration-page.module.css'
import { SignUp } from './Signup';
import { Button } from '../button/HeroSectionBtn'
import apple from '../../assets/images/icons/apple.png';
import facebook from '../../assets/images/icons/facebook.png';
import google from '../../assets/images/icons/google.png';





export const RegistrationPage = () => {
    return (
        <div>
            <header className={style.header}>
            <a href="#/Dashboard">
            <img src={LogoBlack} alt='spotify logo'/>
            </a>
            </header>
            <main className={style.container}>
                <div className={style.content}>
                    <Button type="blue"><img src={facebook} alt="Facebook logo" /><h4>CONTINUE WITH FACEBOOK</h4></Button>
                    <Button type="black"><img src={apple} alt="Apple logo" /><h4>CONTINUE WITH APPLE</h4></Button>
                    <Button type="grey"><img src={google} alt="Google logo" /><h4>CONTINUE WITH GOOGLE</h4></Button>
                <div className={style.line}>   
                     <span></span>
                     <h4>OR</h4>
                     <span></span>
                </div>
                <form>
                    <label for="email">Email address or username</label>
                    <input type="email" placeholder='Email address or Username' name='email'/>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <SignIn reset="Forgot your password?" cache="Remember me" login="LOG IN"/>
                </form>
                <div className={style.reg}>
                    <SignUp title="Don't have an account?" register="SIGN UP FOR SPOTIFY"/>
                </div>
                </div>
            </main>
        </div>
    )
}

