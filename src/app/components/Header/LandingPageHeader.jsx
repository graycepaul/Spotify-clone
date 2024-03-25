import { Link } from 'react-router-dom'
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
            <li><Link to="/premium" >Premium</Link></li> 
            <li><Link to="/hero">Support</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li>|</li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </div> 
    </div>
   )
}




// 