import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
    const { groupName, category, meetLocation, image, maxMember, startDate, userName, userEmail, userDispalyName, description, creationTime } = useLoaderData(); 


    return (
        <div className='space-y-3 md:space-y-4 lg:space-y-5 my-5 md:my-8 lg:my-10'>
            <div className='w-2/7 rounded-2xl'>
                <img className='w-full rounded-2xl' src={image}  />
            </div>
            <h1 className='text-white/70 text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-extrabold'>Group Name : {groupName}</h1>
            <h2 className='text-white/70 text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>Admin : {userDispalyName}</h2>
            <h2 className='text-white/70 text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>Admin User Name : {userName}</h2>
            <h2 className='text-white/70 text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>Admin Email : {userEmail}</h2>
            <div className='text-white/70 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 text-lg font-semibold md:font-bold'>
                <span>Category : {category}</span> 
                <span>Max Member can join : {maxMember}</span>
                <span>Meet Location : {meetLocation}</span>
            </div>
            <div className='text-white/70 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 text-lg font-semibold md:font-bold'>
                <span>Start On : {startDate}</span>
                <span>Creation Time : {creationTime}</span>
            </div>

            <p className='font-semibold text-white/70 my-5 md:my-7 '>Description : {description}</p>
        </div>
    );
};

export default GroupDetails;