import React from 'react';
import '../css/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaDownload } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="m-5 mt-5 p-5 rounded">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="flex flex-col items-start gap-4">
                    {/* LinkedIn */}
                    <div className="flex items-center">
                        <FaLinkedin className="text-blue-800" size={30} />
                        <a
                            href="https://www.linkedin.com/in/bramha-deshmukh17/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-lg text-blue-800 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center">
                        <FaGithub style={{color: "var(--text-color)"}} size={30} />
                        <a
                            href="https://github.com/bramha-deshmukh17"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--text-color)" }}
                            className="ml-2 text-lg hover:underline"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Gmail */}
                    <div className="flex items-center">
                        <FaEnvelope className="text-red-600" size={30} />
                        <a
                            href="mailto:brammhadeshmukh17@gmail.com"
                            className="ml-2 text-lg text-red-600 hover:underline"
                        >
                            Gmail
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-start gap-4">
                    {/* Twitter */}
                    <div className="flex items-center">
                        <FaTwitter className="text-blue-500" size={30} />
                        <a
                            href="https://x.com/deshmukh_bramha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-lg text-blue-500 hover:underline"
                        >
                            Twitter
                        </a>
                    </div>

                    {/* resume */}
                    <div className="flex items-center">
                        <button
                            onClick={() => window.open('./resume.pdf', '_blank')}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        >
                            <FaDownload className="mr-2" size={20} />
                            Download Resume
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
