import React from 'react';

const ErrorPages = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontFamily: 'Arial, sans-serif'
            }}>
                <h1 style={{ fontSize: '4em', color: '#333', marginBottom: '0.2em' }}>404</h1>
                <p style={{ fontSize: '1.5em', color: '#777', marginBottom: '1em' }}>Page Not Found</p>
                <p style={{ color: '#777' }}>The page you are looking for does not exist or has been moved.</p>
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