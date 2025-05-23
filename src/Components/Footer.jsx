import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Footer = () => {
    const handleNewsletter = e => {
        e.preventDefault(); 
        toast.success("You Have Succesfully Subscribe")
    }
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-xl md:rounded-2xl">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link to='/' className="link link-hover">Web Development</Link>
                <Link to='/' className="link link-hover">React development</Link>
                <Link to='/' className="link link-hover">Marketing</Link>
                <Link to='/' className="link link-hover">Android Development</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </nav>
            <form onSubmit={handleNewsletter}>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            required
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button type='submit' className="btn btn-primary join-item hover:btn-secondary">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;