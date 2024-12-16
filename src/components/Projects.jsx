import React from 'react';
import '../css/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="m-5 mt-5 p-5 rounded">
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>

            {/* Grid layout for projects, responsive for 1-2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="text-xl font-semibold">John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="text-xl font-semibold">John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="text-xl font-semibold">John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="text-xl font-semibold">John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
