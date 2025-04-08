import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer className='bg-black text-white p-3 text-center cursor-default'>
            <p>&copy; {currentYear} Bramha Deshmukh</p>
        </footer>
    );
};

export default Footer;
