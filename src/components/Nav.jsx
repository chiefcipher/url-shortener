import React from "react"
import {ReactComponent as NavLogo } from './logo.svg'

export const Nav = ()=> { 
    return ( 
        <nav className='nav'>
            <div className="nav__icon"> 
                <NavLogo />
            </div>
            <ul className="nav__lists"> 
                <li className="nav__lists--item"><a href='/#' className="no-deco">Features</a></li>  
                <li className="nav__lists--item"><a href='/#' className="no-deco">Pricing</a></li>  
                <li className="nav__lists--item"><a href='/#' className="no-deco">Resources</a></li>  
            </ul>
            <div className="nav__cta">
                <a href='/#' className="no-deco">Login</a>
                <a href='/#' className="no-deco">Sign Up</a>
            </div>
        </nav> 
    )
}