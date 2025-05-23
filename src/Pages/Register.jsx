import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast, Zoom } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const { createUser, popUpSignIn } = useContext(AuthContext);
    const [passerr, setPasserr] = useState('');
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const formEntries = formData.entries();
        const { email, password, ...restFormData } = Object.fromEntries(formEntries)

        // Reset 
        setPasserr('')

        // Password validation 
        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            setPasserr('Must have an Uppercase letter in the password');
            return;
        } else if (!/^(?=.*[a-z]).*$/.test(password)) {
            setPasserr('Must have a Lowercase letter in the password ')
            return;
        } else if (!/^.{6,}$/.test(password)) {
            setPasserr('Password Must have at least 6 character');
            return;
        } else {
            setPasserr('');
        }

        // Create user With email and password 

        createUser(email, password)
            .then(userCredential => {
                if (userCredential.user) {
                    const newUser = {
                        email,
                        emailVerified: userCredential.user.emailVerified,
                        creationTime: userCredential.user.metadata.creationTime,
                        lastSignInTime: userCredential.user.metadata.lastSignInTime,
                        uid: userCredential.user.uid,
                        ...restFormData
                    }
                    fetch('http://localhost:5000/signup', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have successfully Register', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            }
                        })
                }
            })
            .catch(error => {
                toast.warn(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                });
            })
    };

    // Handle Google Signin
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSign = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    const email = user.email;
                    const name = user.displayName;
                    const emailVerified = user.emailVerified;
                    const photo = user.photoURL;
                    const uid = user.uid;
                    const creationTime = user.metadata.creationTime;
                    const lastSignInTime = user.metadata.lastSignInTime;
                    const usernameArray = email.split("@");
                    const username = usernameArray[0];
                    const newUser = { name, email, photo, username, emailVerified, uid, creationTime, lastSignInTime };

                    fetch('http://localhost:5000/signup', {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.upsertedCount > 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have successfully register with Google', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            };

                            if (data.modifiedCount > 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have successfully Login with google ', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            };

                            if (data.matchedCount > 0 && data.modifiedCount == 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have already Login with google ', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            }
                        })
                }
            })
            .catch(error => {
                toast.warn(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                });
            })
    }

    // Github signing 
    const githubProvider = new GithubAuthProvider(); 
    const handleGithubSignIn = () => {
        popUpSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    const email = user?.providerData[0]?.email; 
                    const name = user.displayName;
                    const emailVerified = user.emailVerified;
                    const photo = user.photoURL;
                    const uid = user.uid;
                    const creationTime = user.metadata.creationTime;
                    const lastSignInTime = user.metadata.lastSignInTime;
                    const usernameArray = email.split("@");
                    const username = usernameArray[0];
                    const newUser = { name, email, photo, username, emailVerified, uid, creationTime, lastSignInTime };

                    fetch('http://localhost:5000/signup', {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.upsertedCount > 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have successfully register with Github', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            };

                            if (data.modifiedCount > 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have successfully Login with Github ', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            };

                            if (data.matchedCount > 0 && data.modifiedCount == 0) {
                                if (location.state) {
                                    navigate(location.state)
                                } else {
                                    navigate('/')
                                }
                                toast.success('You have already Login with Github ', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Zoom,
                                });
                            }
                        })
                }
            })
            .catch(error => {
                toast.warn(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                });
            })
    }
    return (
        <div className="hero-content">
            <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Register now!</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' required className="input w-full" placeholder="Enter Your Name" />
                        <label className="label">User Name</label>
                        <input type="text" name='username' required className="input w-full" placeholder="Enter Your User Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' required className="input w-full" placeholder="Enter Your Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' required className="input w-full" placeholder="Password" />
                        <span>{passerr && <p className='text-red-500'>{passerr}</p>}</span>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold'>Already have an account? Please <Link to='/login' className='underline text-blue-500'>Login</Link></p>
                    <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 my-4 md:my-6 lg:my-8'>
                        <button onClick={handleGithubSignIn} className="btn bg-black text-white border-black">
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            Continue with GitHub
                        </button>

                        {/* Google */}
                        <button onClick={handleGoogleSign} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;