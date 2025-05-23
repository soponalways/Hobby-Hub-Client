import React from 'react';
import { Fade } from 'react-awesome-reveal';

const HowItWorksCard = ({count , h2 , p}) => {
    return (
        <div className='space-y-2 md:space-y-3 bg-base-300 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:bg-primary duration-75'>
            <Fade damping={0.2} duration={1500} cascade triggerOnce>
                <h2 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold'>{count}</h2>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold'>{h2}</h2>
                <p className='text-base md:text-lg lg:text-xl font-medium md:font-semibold'>{p}</p>
           </Fade>
        </div>
    );
};

export default HowItWorksCard;