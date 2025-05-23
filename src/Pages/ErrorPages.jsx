import React from 'react';
import { useRouteError } from 'react-router';
import NavBar from '../Components/NavBar';

const ErrorPages = () => {
    const error = useRouteError(); 
    console.log(error);
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <div className='text-center' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontFamily: 'Arial, sans-serif'
            }}>
                <h2 className='text-4xl font-bold' style={{ fontSize: '4em', color: '#333', marginBottom: '0.2em' }}>{error?.status}</h2>
                <h1 className='text-5xl font-bold' style={{ fontSize: '1.5em', color: '#777', marginBottom: '1em' }}>{error?.statusText}</h1>
                <p style={{ color: '#777' }}>The page you are looking for does not exist or has been moved.</p>
                <p className='text-lg text-red-600 font-medium'>{error?.data}</p>
                <button style={{
                    padding: '0.5em 1em',
                    marginTop: '1em',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    cursor: 'pointer'
                }} onClick={() => window.location.href = '/'}>
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPages;