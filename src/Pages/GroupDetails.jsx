import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import moment from 'moment';

const GroupDetails = () => {
    const [passed ,setPassed] = useState(false)
    const { groupName, category, meetLocation, image, maxMember, startDate, userName, userEmail, userDispalyName, description, creationTime } = useLoaderData(); 
    
    useEffect(() => {
        const year = moment().format("YYYY"); 
        const month = moment().format("MM")
        const day = moment().format("DD")
        const todayDate = `${year}-${month}-${day}`

        const date1 = moment(startDate);
        const date2 = moment(todayDate)
        if (date1.isBefore(date2)) {
            setPassed(true)
        } else {
            setPassed(false)
        }
    } , [startDate])
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
            <div className='my-6 md:my-8 lg:my-10'>
                {
                    passed === false ? <button className='btn btn-primary hover:btn-secondary'>Join Group</button> :
                        <button className='btn btn-primary hover:btn-secondary'>Group No Longer active</button>
                }
            </div>
        </div>
    );
};

export default GroupDetails;