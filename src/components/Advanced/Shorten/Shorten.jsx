import React from "react";
import PropTypes from 'prop-types'
export const Shorten  = props => { 
    return ( 
        <div className="shorten" > 
            <div className="shorten__cta-container" > 
                <input style={{border : props.showError ? '2px solid #f46262' : 'none'}} value={props.shortenInputValue} onChange={props.handleInputChange} type='text' className="shorten__text-area" placeholder="Shorten a link here" /> 
                <span style={{display : props.showError ? 'block' : 'none'}} className="shorten__error">Please add a link </span>
                <button className="shorten__cta " onClick={props.clickShortenBtn} > Shorten it!</button>
            </div>
            
            <ul className="shorten__urls" > 
            {props.shortenedURL.map ( item => (
                <li key={item.id} className="shorten__url" > <div className="main-url">{item.mainURL}</div><div className="shortened-url">{item.shortenedURL}</div> <button className="copy-btn" onClick={()=> props.clickCopy(item.id)} style={{background : item.statusText === 'Copy' ?  '#2acfcf' : '#3b3054' }} >{item.statusText} </button></li>

            ))}
           </ul>
       
     </div>
    )
}

Shorten.propTypes = { 
    showError : PropTypes.bool  , 
    clickCopy : PropTypes.func ,
    clickShortenBtn : PropTypes.func , 
    shortenedURL : PropTypes.array , 
    shortenInputValue : PropTypes.string , 
    handleInputChange : PropTypes.func 


}