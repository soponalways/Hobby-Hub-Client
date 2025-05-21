import React from 'react';

const CreateGroup = () => {
    return (
        <div>
            <div className='text-center space-y-1 md:space-y-2 my-2 md:my-3 lg:my-4'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-extrabold'>Create a group</h2>
                <p className='font-medium'>Create a group that's your own hobby. Here can join another user and share there hobby.</p>
            </div>
            {/* Form  */}
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-10/12 mx-auto my-3 md:my-4 lg:my-5 border p-4">
                <legend className="fieldset-legend text-center">Create Your own Hobby Community</legend>

               <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Group Name</label>
                        <input type="text" className="input w-full" placeholder="Enter the group name that you want" />
                    </div>

                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Hobby Category</label>
                        <input type="text" className="input w-full" placeholder="Which hobby category you want" list="browsers" />
                        <datalist id="browsers">
                            <option value="Chrome"></option>
                            <option value="Firefox"></option>
                            <option value="Safari"></option>
                            <option value="Opera"></option>
                            <option value="Edge"></option>
                        </datalist>
                    </div>
               </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Meeting Location</label>
                        <input type="text" className="input w-full" placeholder="Enter meeting location " />
                    </div>

                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Image URL</label>
                        <input type="text" className="input w-full" placeholder="Enter Group Image URL " />
                    </div>
                </div>

                <div className='flex my-2 gap-3 md:gap-4 lg:gap-5'>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Max Members</label>
                        <input type="text" className="input w-full" placeholder="Enter the max member that can join group" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">Start Date</label>
                        <input type="date" className="input w-full" />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">User Name</label>
                        <input type="text" className="input w-full" value={"User Name"}  />
                    </div>

                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">User Email</label>
                        <input type="email" className="input w-full" value={"sopon@sopon.com"} />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                    <div className='space-y-1 md:space-y-2'>
                        <label className="label">User Display Name</label>
                        <input type="text" className="input w-full" value={"User Dispaly Name"} />
                    </div>
                </div>
                <button type='submit' className="btn btn-neutral mt-4">Create</button>
            </form>
        </div>
    );
};

export default CreateGroup;