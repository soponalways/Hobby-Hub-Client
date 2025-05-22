import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard';

const AllGroup = () => {
    const groups = useLoaderData(); 
    return (
        <div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-primary text-center my-3 md:my-5 lg:my-7'>Total Group: {groups.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 my-4 md:my-6 lg:my-7'>
                {
                    groups.map(group => <GroupCard key={group._id} group={group}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroup;