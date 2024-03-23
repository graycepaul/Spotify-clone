import { Info } from './info'
import style from './Footer.module.css'
import LogoWhite from '../../assets/images/logo-white.png';
import  Socials from '../../assets/images/icons/socials.png'



export const Footer = ()=> {
    return(
       <footer>
        <div className={style.content}>
            <div className={style.about}>
                <img src={LogoWhite} alt='logo' className='logo-white'/>
                <Info />
                <img src={Socials} alt="social media icons" />
            </div>
            <div className={style.footNote}>
            <ul>    
                <li>Legal</li>           
                <li>Privacy Center</li>
                <li>Privacy policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
            </ul>
            <div>
                <p>India (English)</p>
                <p>c 2023 Spotify AB</p>
            </div> 
            </div>

        </div>
       </footer> 
    )
}


