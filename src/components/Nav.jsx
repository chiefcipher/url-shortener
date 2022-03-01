import React from "react"
import {ReactComponent as NavLogo } from './logo.svg'

export const Nav = ()=> { 
    return ( 
        <nav className='nav'>
            <div className="nav__icon"> 
                <NavLogo />
            </div>
            <ul className="nav__lists"> 
                <li className="nav__lists--item">Features</li>  
                <li className="nav__lists--item">Pricing</li>  
                <li className="nav__lists--item">Resources</li>  
            </ul>
            <div className="nav__ctas">
                <a href='#'>Login</a>
                <a href='#'>Sign Up</a>
            </div>
        </nav> 
    )
}