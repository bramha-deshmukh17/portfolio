import React from 'react';
import '../css/Skills.css'
import SpotlightCard from './Animate/SpotlightCard'
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPython,
    FaJava,
} from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiExpress } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 text-3xl" />, description: "Frontend framework for building dynamic user interfaces." },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" />, description: "Backend runtime for JavaScript applications." },
        {
            name: "Express.js", icon: (
                <div className="p-2 rounded-full bg-white flex items-center justify-center">
                    <SiExpress className="text-gray-800 text-3xl" />
                </div>
            ), description: "Minimalist Node.js framework for building APIs."
        },
        { name: "Java", icon: <FaJava className="text-red-600 text-3xl" />, description: "Object-oriented programming language for backend and desktop applications." },
        { name: "Databases", icon: <FaDatabase className="text-orange-600 text-3xl" />, description: "Relational & NoSQL databases like MySQL, MongoDB." },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" />, description: "Markup language for creating web pages." },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, description: "Styling language for designing responsive layouts." },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" />, description: "Programming language for building web and server-side applications." },
        { name: "Python", icon: <FaPython className="text-blue-400 text-3xl" />, description: "High-level programming language for AI, ML, and scripting." },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-500 text-3xl" />, description: "Framework for building cross-platform mobile apps." },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" />, description: "Utility-first CSS framework for rapid UI development." },
    ];

    return (
        <section id="skills" className="py-12 m-5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">
                    My Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className="rounded-lg shadow-md flex flex-col"
                            style={{
                                backgroundColor: "var(--bg-color)",
                                boxShadow: "5px 5px 15px var(--shadow-color)",
                                color: "var(--text-color)",
                                height: "170px"
                            }}
                        >
                            <SpotlightCard className="card shadow-card" spotlightColor="rgba(0, 229, 255, 0.2)" padding="none">
                                <div className="flex justify-center items-center mb-4 h-16">
                                    {skill.icon}
                                </div>
                                <h3
                                    className="text-lg text-center font-semibold mb-2"
                                    style={{ color: "var(--main-heading)" }}
                                >
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-center">{skill.description}</p>
                            </SpotlightCard>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
