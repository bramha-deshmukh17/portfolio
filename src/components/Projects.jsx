import React from 'react';
import '../css/Projects.css';
import { FaGithub } from 'react-icons/fa';
import ShinyText from './Animate/ShinyText';
import SpotlightCard from './Animate/SpotlightCard' 

const Projects = () => {
    return (
        <section id="projects" className="m-5 mt-5 p-5 rounded">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>

            {/* Grid layout for projects, responsive for 1-2 columns */}
            <div className="place-items-center m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="flip-card">
                    <div className="flip-card-inner rounded-lg">
                        <div className="flip-card-front rounded-lg">
                            <img src="./projects/edumate.png" alt="Avatar" className="w-full h-16/9 object-fit rounded-lg" />
                            <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                EduMate
                            </h2>
                        </div>
                        <div className="flip-card-back rounded-lg text-justify">
                            <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p> <b>EduMate is a e-learning website designed using <span></span>
                                    <ShinyText
                                        text="PHP"
                                        disabled={false}
                                        speed={1}
                                        className="code"
                                    /></b><br />
                                    With its 3 distinct modules - Student Module, Admin Module, Discussion Forum - the
                                    platform provides a comprehensive and user-friendly environment for effective learning,
                                    efficient course management, and engaging discussions. <br /><br />

                                </p>
                                <div className="flex justify-center">
                                    <FaGithub className="" size={30} />
                                    <a href="https://github.com/bramha-deshmukh17/edumate" target="_blank" rel="noopener noreferrer" className="ml-2">View</a>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flip-card">
                    <div className="flip-card-inner rounded-lg">
                        <div className="flip-card-front rounded-lg">
                            <img src="./projects/tourguide.png" alt="Avatar" className="w-full h-16/9 object-fit rounded-lg" />
                            <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                TourGuide
                            </h2>
                        </div>
                        <div className="flip-card-back rounded-lg text-justify">
                            <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p> <b>TourGuide is a guide booking website designed using <span></span>
                                    <ShinyText
                                        text="Django"
                                        disabled={false}
                                        speed={1}
                                        className="code"
                                    /></b><br />
                                    The TourGuide aims to provide a comprehensive platform for tourists to book guides and explore
                                    tourist places, restaurants, and hotels. The website will facilitate guide booking services, offer information
                                    about tourist attractions, dining options, and accommodation, enhancing the overall travel experience.

                                </p>
                                <div className="flex justify-center">
                                    <FaGithub className="" size={30} />
                                    <a href="https://github.com/bramha-deshmukh17/tourguide" target="_blank" rel="noopener noreferrer" className="ml-2">View</a>
                                </div>
                            </SpotlightCard>
                            
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flip-card">
                    <div className="flip-card-inner rounded-lg">
                        <div className="flip-card-front rounded-lg">
                            <img src="./projects/rto.jpg" alt="Avatar" className="w-full h-full object-fit rounded-lg" />
                            <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                Smart RTO
                            </h2>
                        </div>
                        <div className="flip-card-back rounded-lg text-justify">
                            <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p> <b>Smart RTO is a RTO mobile app designed using <span></span>
                                    <ShinyText
                                        text="Flutter"
                                        disabled={false}
                                        speed={1}
                                        className="code"
                                    /></b><br />
                                    The Smart RTO is designed to streamline the operations
                                    of RTO in India. It aims to provide a user-friendly platform for citizens to
                                    access various RTO services online. <br />
                                    Management of user queries regarding licenses and vehicle fines.
                                    Integration with payment gateways for fine payments.

                                </p>
                                <div className="flex justify-center">
                                    <FaGithub className="" size={30} />
                                    <a href="https://github.com/bramha-deshmukh17/SmartRTO" target="_blank" rel="noopener noreferrer" className="ml-2">View</a>
                                </div>
                            </SpotlightCard>
                            

                        </div>
                    </div>
                </div>

                {/* 4th card */}
                <div className="flip-card">
                    <div className="flip-card-inner rounded-lg">
                        <div className="flip-card-front rounded-lg">
                            <img src="./projects/flash_chat.png" alt="Avatar" className="w-full h-16/9 object-fit rounded-lg" />
                            <h2 className="project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg">
                                Flash Chat
                            </h2>
                        </div>
                        <div className="flip-card-back rounded-lg text-justify">
                            <SpotlightCard className="card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p> <b>Flash Chat is chatting app built using<span></span>
                                    <ShinyText
                                        text="MERN"
                                        disabled={false}
                                        speed={1}
                                        className="code"
                                    /></b><br />
                                    It provide clud support of MongoDB Atlas to store the user chats.<br/>
                                    Also uses web socket to have a realtime communication.<br/>
                                    Allows files and media sharing.<br /><br/>

                                </p>
                                <div className="flex justify-center">
                                    <FaGithub className="" size={30} />
                                    <a href="https://github.com/bramha-deshmukh17/flash_chat" target="_blank" rel="noopener noreferrer" className="ml-2">View</a>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
