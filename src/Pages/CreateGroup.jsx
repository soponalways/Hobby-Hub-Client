import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CreateGroup = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { email, name, username } = user || {};

    const handleCreateGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newGroup = Object.fromEntries(formData.entries())

        fetch("http://localhost:5000/createGroup", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        title: "Group Created Successfully",
                        icon: "success",
                        draggable: true,
                        confirmButtonText: "Go to Group"
                    }).then(result => {
                        if (result.isConfirmed) {
                            navigate(`/group/${data.insertedId}`)
                        }
                    })
                }
            })
    }
    return (
        <div>
            <div className='text-center space-y-1 md:space-y-2 my-2 md:my-3 lg:my-4'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-extrabold'>Create a group</h2>
                <p className='font-medium'>Create a group that's your own hobby. Here can join another user and share there hobby.</p>
            </div>
            {/* Form  */}
            <form onSubmit={handleCreateGroup}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-10/12 mx-auto my-3 md:my-4 lg:my-5 border p-4">
                    <legend className="fieldset-legend text-center">Create Your own Hobby Community</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Group Name</label>
                            <input type="text" name='groupName' className="input w-full" placeholder="Enter the group name that you want" />
                        </div>

                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Hobby Category</label>
                            <input type="text" name='category' className="input w-full" placeholder="Which hobby category you want" list="browsers" />
                            <datalist id="browsers">
                                <option value="Books Club"></option>
                                <option value="Hiking"></option>
                                <option value="Painting circles"></option>
                                <option value="Drawing & Painting"></option>
                                <option value="Photography"></option>
                                <option value="Video Gaming"></option>
                                <option value="Fishing"></option>
                                <option value="Running"></option>
                                <option value="Cooking"></option>
                                <option value="Reading"></option>
                                <option value="Writing"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Meeting Location</label>
                            <input type="text" name='meetLocation' className="input w-full" placeholder="Enter meeting location " />
                        </div>

                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input w-full" placeholder="Enter Group Image URL " />
                        </div>
                    </div>

                    <div className='flex my-2 gap-3 md:gap-4 lg:gap-5'>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Max Members</label>
                            <input type="text" name='maxMember' className="input w-full" placeholder="Enter the max member that can join group" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">Start Date</label>
                            <input type="date" name='startDate' className="input w-full" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">User Name</label>
                            <input type="text" name='userName' className="input w-full" readOnly defaultValue={username} />
                        </div>

                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">User Email</label>
                            <input type="email" name='userEmail' className="input w-full" readOnly defaultValue={email} />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                        <div className='space-y-1 md:space-y-2'>
                            <label className="label">User Display Name</label>
                            <input type="text" name='userDispalyName' className="input w-full" readOnly defaultValue={name} />
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <label className='label'>Description</label>
                        <textarea name='description' className="textarea w-full" placeholder="Description on your hobby"></textarea>
                    </div>
                    <button type='submit' className="btn btn-neutral mt-4">Create</button>
                </fieldset>
            </form>
        </div>
    );
};

export default CreateGroup;