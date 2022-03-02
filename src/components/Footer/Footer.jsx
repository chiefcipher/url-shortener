import React from "react" 
import {ReactComponent as  Logo} from './logo.svg' 
import {ReactComponent as IconPinterest} from './icon-pinterest.svg'
import {ReactComponent as IconTwitter } from './icon-twitter.svg'
import {ReactComponent as IconInstagram} from './icon-instagram.svg'
import {ReactComponent as IconFacebook } from './icon-facebook.svg' 

export const Footer = ()=> { 
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__logo">
                <Logo />
            </div>
            <div className="footer__content">
                <div className="footer__content--heading"> Features</div> 
                <ul className="footer__content--items">
                    <li className="footer__content--item">Link shortening </li>
                    <li className="footer__content--item">Branded Links </li>
                    <li className="footer__content--item">Analytics </li>
                </ul>
            </div>

            <div className="footer__content">
                <div className="footer__content--heading"> Resources </div> 
                <ul className="footer__content--items">
                    <li className="footer__content--item">Blog </li>
                    <li className="footer__content--item">Developers </li>
                    <li className="footer__content--item">Support </li>
                </ul>
            </div>

            <div className="footer__content">
                <div className="footer__content--heading"> Company </div> 
                <ul className="footer__content--items">
                    <li className="footer__content--item">About </li>
                    <li className="footer__content--item">Our Team </li>
                    <li className="footer__content--item">Careers </li>
                    <li className="footer__content--item">Contact </li>
                </ul>
            </div>

            
            <div className="footer__socials">
                <IconFacebook /> 
                <IconInstagram /> 
                <IconTwitter /> 
                <IconPinterest />
            </div>
            </div>
        </footer>
    )
} 