import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiPiapro } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-800 text-white rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy Policy</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-5xl">
                    <a className='p-1 rounded-full hover:bg-green-300'>
                        <FaInstagram></FaInstagram>
                    </a>
                    <a className='p-1 rounded-full hover:bg-green-300'>
                        <FaFacebook></FaFacebook>
                    </a>
                    <a className='p-1 rounded-full hover:bg-green-300'>
                        <SiPiapro></SiPiapro>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - PlantHub. All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;