import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import MyGroupTableRow from '../Components/MyGroupTableRow';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const {user} = use(AuthContext); 
    const [groups, setGroups] = useState([]); 

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-chi.vercel.app/group/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaingingGroups = groups?.filter(group => group._id !== id); 
                            setGroups(remaingingGroups)
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your group has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    
    // Handle Side Effect 
    useEffect(() => {
        fetch(`https://hobby-hub-chi.vercel.app/groups/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setGroups(data)
        })
    }, [user])
    return (
        <div>
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold text-primary my-3 md:my-4 lg:my-5 '>My Total Groups: {groups.length}</h2>

            <div className="overflow-x-auto my-2 md:my-4 lg:my-6">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xs md:text-sm'>Group Name</th>
                            <th className='text-xs md:text-sm'>Location</th>
                            <th className='text-xs md:text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            groups?.map((group) => <MyGroupTableRow key={group?._id} group={group} handleDelete={handleDelete}></MyGroupTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroups;