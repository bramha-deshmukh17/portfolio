import React from 'react';
import '../css/Home.css'
import GradientText from './Animate/GradientText'
import ShinyText from './Animate/ShinyText';


const Home = () => {
    return (
        <section id="home" className="m-5 flex flex-col md:flex-row items-center justify-around md:space-y-0 md:space-x-5">
            {/* Left Section (2x width) */}
            <div className="left flex-2 flex justify-center p-5">
                <div className="text-container flex flex-col items-start">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className=""
                    >
                        BRAMHA DESHMUKH
                    </GradientText>
                    <ShinyText
                        text="Developer"
                        disabled={false}
                        speed={1}
                        className="home"
                    />
                </div>
            </div>

            {/* Right Section (1x width) */}
            <div className="right flex-1 max-w-2xl p-5 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">
                    Welcome to My Portfolio
                </h2>
                <p className="text-base md:text-lg mb-3 leading-relaxed">
                    Hi, I'm Bramha Deshmukh. I'm a web and mobile application developer and passionate
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
        </section>

    );
};

export default Home;