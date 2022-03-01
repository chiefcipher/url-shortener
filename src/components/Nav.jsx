import React from "react"
import {ReactComponent as NavLogo } from './logo.svg'

export const Nav = ()=> { 
    return ( 
        <nav className='nav'>
            <div className="nav__icon"> 
                <NavLogo />
            </div>
            <ul className="nav__lists"> 
                <li className="nav__lists--item"><a href='#'>Features</a></li>  
                <li className="nav__lists--item"><a href='#'>Pricing</a></li>  
                <li className="nav__lists--item"><a href='#'>Resources</a></li>  
            </ul>
            <div className="nav__cta">
                <a href='#'>Login</a>
                <a href='#'>Sign Up</a>
            </div>
        </nav> 
    )
}