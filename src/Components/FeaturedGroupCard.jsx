import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const FeaturedGroupCard = ({ group }) => {
    const navigate = useNavigate(); 
    const handleClick = id => {
        navigate(`/group/${id}`)
    }
    return (
        <div onClick={() => handleClick(group?._id)} className='bg-base-300 hover:bg-secondary duration-100 flex flex-col gap-2 md:gap-3 lg:gap-4 justify-center items-center p-2 md:p-4 lg:p-6 rounded-xl md:rounded-2xl'>
            <div className='avatar'>
                <div className='rounded-xl md:rounded-2xl w-24'>
                    <img src={group?.image} />
                </div>
            </div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>{group?.groupName}</h1>
        </div>
    );
};

export default FeaturedGroupCard;