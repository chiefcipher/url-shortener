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
                    <li className="footer__content--item c-pointer">Link shortening </li>
                    <li className="footer__content--item c-pointer">Branded Links </li>
                    <li className="footer__content--item c-pointer">Analytics </li>
                </ul>
            </div>

            <div className="footer__content">
                <div className="footer__content--heading"> Resources </div> 
                <ul className="footer__content--items">
                    <li className="footer__content--item c-pointer">Blog </li>
                    <li className="footer__content--item c-pointer">Developers </li>
                    <li className="footer__content--item c-pointer">Support </li>
                </ul>
            </div>

            <div className="footer__content">
                <div className="footer__content--heading"> Company </div> 
                <ul className="footer__content--items">
                    <li className="footer__content--item c-pointer">About </li>
                    <li className="footer__content--item c-pointer">Our Team </li>
                    <li className="footer__content--item c-pointer">Careers </li>
                    <li className="footer__content--item c-pointer">Contact </li>
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