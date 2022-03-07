import React from "react";

export const Shorten  = props => { 
    return ( 
        <div className="shorten" > 
            <input type='text' className="shorten__text-area" placeholder="Shorten a link here" /> 
            <button className="shorten__cta "> Shorten it!</button>
        </div>
    )
}