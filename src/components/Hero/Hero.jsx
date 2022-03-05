import React from "react"; 
import { ReactComponent as Illustration } from "./illustration-working.svg";
import IllustrationLogo from './illustration-working.svg'
export const Hero = ()=> { 
    return ( 
        <section className="hero">
        <div className="hero__content">
            <h1 className='hero__text'>
                More than just shorter links
            </h1>
            <div className="hero__description"> 
            Build your brand's recognition and get detailed insights on how your links are performing</div>
            <div className="hero__cta cta cta--signup">
                Get started
            </div>
        </div>
        <div className="hero__image">
            <img src={IllustrationLogo} /> 
        </div>
        </section>
    )
}