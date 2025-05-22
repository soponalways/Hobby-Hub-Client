import React from 'react';

const HowItWorksCard = ({count , h2 , p}) => {
    return (
        <div className='space-y-2 md:space-y-3 bg-base-300 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:bg-primary duration-75'>
            <h2 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold'>{count}</h2>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold'>{h2}</h2>
            <p className='text-base md:text-lg lg:text-xl font-medium md:font-semibold'>{p}</p>
        </div>
    );
};

export default HowItWorksCard;