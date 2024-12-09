import React from 'react';
//import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Project 1</h3>
                    <p>Description of Project 1.</p>
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-item">
                    <h3>Project 2</h3>
                    <p>Description of Project 2.</p>
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
