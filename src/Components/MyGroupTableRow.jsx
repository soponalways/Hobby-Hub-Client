import React from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyGroupTableRow = ({ group, handleDelete }) => {
    const navigate = useNavigate(); 
    return (
        <tr>
            <td >
                <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-7 md:h-8 lg:h-12 w-7 md:w-8 lg:w-12">
                            <img
                                src={group?.image}
                                alt={group?.groupName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold md:font-bold text-xs md:text-sm">{group?.groupName}</div>
                    </div>
                </div>
            </td>
            <td className='text-xs md:text-sm lg:text-base'>
                {/* <Link to={group?.meetLocation} target='_blank' className='hover:underline hover:text-blue-500'></Link> */}
                {group?.meetLocation}
                <br />
                <span className="badge badge-ghost badge-sm">{group?.startDate}</span>
            </td>
            <th className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3'>
                <button onClick={() => navigate(`/group/${group?._id}`)} className="btn btn-primary btn-xs md:btn-sm hover:btn-secondary">Info</button>
                <button onClick={() => navigate(`/updateGroup/${group?._id}`)} className="btn btn-primary btn-xs md:btn-sm hover:btn-secondary">Update</button>
                <button onClick={() => handleDelete(group?._id)} className="btn btn-primary btn-xs md:btn-sm hover:btn-secondary">Delete</button>
            </th>
        </tr>
    );
};

export default MyGroupTableRow;