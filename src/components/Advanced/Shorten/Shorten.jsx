import React from "react";

export const Shorten  = props => { 
    return ( 
        <div className="shorten" > 
            <div className="shorten__cta-container" > 
                <input value={props.shortenInputValue} onChange={props.handleInputChange} type='text' className="shorten__text-area" placeholder="Shorten a link here" /> 
                <button className="shorten__cta "> Shorten it!</button>

            </div>
            
            <ul className="shorten__urls" > 
            {props.shortenedURL.map ( item => (
                <li className="shorten__url" > <div className="main-url">{item.mainURL}</div><div className="shortened-url">{item.shortenedURL}</div> <button className="copy-btn">Copy</button></li>

            ))}
           </ul>
       
     </div>
    )
}