import React from "react"
import {ReactComponent as NavLogo } from './logo.svg'
import MenuLogo from './001-menu.png'


export const Nav = (props)=> { 
    const navItems = ['Features' , 'Pricing' , 'Resources ']


    return ( 
        <nav className='nav'>
            <div className="nav__icon"> 
                <NavLogo />
            </div>
            <div className="nav__rhs" style={{display : !props.isMobileDevice ? 'flex' : props.isMobileDevice && props.showMobileNav ? 'block' : 'none' }}> 
            {/* rhs signifies right hand side  */}
                <ul className="nav__lists"> 
                { navItems.map(item => ( 
                <li className="nav__lists--item" key={item}><a href='/#' className="no-deco">{item}</a></li>  
                ))} 
            </ul>
            <div className="nav__cta">
                <a href='/#' className="no-deco cta cta--login login">Login</a>
                <a href='/#' className="no-deco cta cta--signup signup">Sign Up</a>
            </div>
            </div>
            
            <img src={MenuLogo} alt='menu logo' width='35' height='35' className="nav__toggle-logo" onClick={props.toggleMobileNav}/> 
        </nav> 
    )
}