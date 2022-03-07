import React from 'react' ; 
import {ReactComponent as IconRecognition} from './icon-brand-recognition.svg'
import {ReactComponent as IconDetailed} from './icon-detailed-records.svg'
import { ReactComponent as IconCustomizable } from './icon-fully-customizable.svg';
import { Shorten } from './Shorten/Shorten'; 

export const Advanced = props => { 
    return ( 
        <section className='advanced' > 
            <Shorten {...props } /> 
            <h1 className='advanced__heading'> 
                Advanced Statistics 
            </h1>
            <div className='advanced__description'> 
                Track how your links are performing across web with our advanced statistics dashboard.
            </div>
            <div className='advanced__blocks'>
                
                <div className='advanced__block'>  
                    <div className='advanced__block--icon'>
                        <IconRecognition/> 
                    </div> 
                    <h2 className='advanced__block--heading'> Brand Recognition</h2>
                    <div className='advanced__block--content'> Boost your recognition with each click. Generic links dont mean a trying. Branded links help instill confidence in your content</div>    
                </div>

                <div className='advanced__block'> 
                <div className='advanced__block--icon'>
                        <IconDetailed/> 
                    </div> 
                    <h2 className='advanced__block--heading'> Detailed Records </h2>
                    <div className='advanced__block--content'> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </div>    
                </div>

                <div className='advanced__block'> 
                <div className='advanced__block--icon'>
                        <IconCustomizable/> 
                    </div> 
                    <h2 className='advanced__block--heading'> Fully Customizable </h2>
                    <div className='advanced__block--content'> Improves brand awareness and content discoverability through customizable links, supercharging audience engagement</div>    
                </div>

            </div>
        </section>
    )
}