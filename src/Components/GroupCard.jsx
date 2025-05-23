import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const GroupCard = ({group}) => {
    const {_id,  groupName, userDispalyName, image } = group; 
    return (
        <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 justify-center p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-base-300 hover:bg-secondary duration-100'>
            <Fade damping={0.2} duration={1500} triggerOnce>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image} />
                    </div>
                </div>
                <h3 className='text-lg md:text-xl lg:text-2xl font-semibold md:font-bold '>{groupName}</h3>
                <h3>Group Admin: {userDispalyName}</h3>
                <Link to={`/group/${_id}`} state={`/group/${_id}`}><button className='btn btn-primary'>See More</button></Link>
            </Fade>
        </div>
    );
};

export default GroupCard;