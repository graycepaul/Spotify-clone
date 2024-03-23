import './LandingPageHeader.css'
import {Logo} from './Logo'



export const LandingPageHeader = () => {
    return (
    <header className="header">
        <div className="logo">
            <Logo /> 
        </div>
           <HeaderNavigation/>
    </header>

    )
}


 export const HeaderNavigation = ()=>{
   return(
    <div  className='dropdown'>
        <div  className='menu-icon'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="menu">
        <ul>
            <li><a href ="#Premium">Premium</a></li> 
            <li><a href ="#Premium">Support</a></li>
            <li><a href ="#Premium">Download</a></li>
            <li>|</li>
            <li><a href ="#Premium">Sign up</a></li>
            <li><a href ="#Premium">Login</a></li>
        </ul>
        </div> 
    </div>
   )
}




// 