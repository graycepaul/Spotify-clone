// import LogoWhite from './assets/images/logo-white.png'
import LogoWhite from '../../assets/images/logo-white.png';

//   import {ReactComponent as  LogoWhiteeSVG}  from '../assets/images/logoWhitee.svg'



export function Logo () {
    return(
        <img src={LogoWhite} alt='logo' className='logo-white'/>
    )
}