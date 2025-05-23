import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaStar } from 'react-icons/fa';

const BookMarkedCard = ({h2, p}) => {
    return (
        <div className='space-y-2 md:space-y-3 bg-base-300 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:bg-primary duration-75'>
            <Fade damping={0.2} duration={1500} cascade triggerOnce className='space-y-2 md:space-y-3'>
                <div className="text-orange-300 flex gap-2 md:gap-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>{h2}</h2>
                <p>{p}</p>
            </Fade>
        </div>
    );
};

export default BookMarkedCard;