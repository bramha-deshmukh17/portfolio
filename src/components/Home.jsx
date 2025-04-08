import React from 'react';
import '../css/Home.css'
import GradientText from './Animate/GradientText'
import ShinyText from './Animate/ShinyText';
import SpotlightCard from './Animate/SpotlightCard';

const Home = () => {
    return (
        <section id="home" className="m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-around md:space-y-0 md:space-x-5">
            {/* Left Section (2x width) */}
            <div className="left flex-2 flex justify-center items-center p-5"> {/* Added items-center */}
                <div className="text-container flex flex-col items-center text-center"> {/* Added text-center */}
                    <img src='me.png' className='w-1/3 align-middle' />
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
            <SpotlightCard className="shadow-card p-5 right flex-1 max-w-2xl" spotlightColor="rgba(0, 229, 255, 0.2)" padding="none">

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
            </SpotlightCard>
        </section>

    );
};

export default Home;
