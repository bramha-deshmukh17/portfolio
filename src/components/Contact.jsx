import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
            <div className="flex flex-col items-center gap-4 shadow-lg">
                <div className="flex items-center">
                    <FaLinkedin className="text-blue-800" size={30} />
                    <a href="https://www.linkedin.com/in/bramha-deshmukh17/" target="_blank" rel="noopener noreferrer" className="ml-2">LinedIn</a>
                </div>
                <div className="flex items-center">
                    <FaGithub className="" size={30} />
                    <a href="https://github.com/bramha-deshmukh17" target="_blank" rel="noopener noreferrer" className="ml-2">GitHub</a>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="text-red-600" size={30} />
                    <a href="mailto:brammhadeshmukh17@gmail.com" className="ml-2">Gmail</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
