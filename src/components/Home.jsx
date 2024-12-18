import React from 'react';
import '../css/Home.css'

const Home = () => {
    return (
        <section id="home" className="m-5 flex flex-col md:flex-row items-center justify-around md:space-y-0 md:space-x-5">
            {/* Left Section (2x width) */}
            <div className="left flex-2 max-w-2xl p-5 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">
                    Welcome to My Portfolio
                </h2>
                <p className="text-base md:text-lg mb-3 leading-relaxed">
                    Hi, I'm Bramha Deshmukh. I'm a web and mobile developer and passionate
                    about creating impactful solutions.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                    Enthusiastic student with a passion for coding and problem-solving, eager
                    to dive into the world of software development. Excited to learn new
                    technologies and collaborate with teams to create innovative solutions.
                    Dedicated to growing my skills and making a positive impact in the tech
                    community.
                </p>
            </div>

            {/* Right Section (1x width) */}
            <div className="right flex-1 flex justify-center items-center">
            
            </div>
        </section>

    );
};

export default Home;
