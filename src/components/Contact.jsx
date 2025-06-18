import '../css/Contact.css';
import ShinyText from './Animate/ShinyText';

const Contact = () => {
    return (
        <section id="contact" className="m-5 mt-5 p-5 rounded">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="flex flex-col items-start gap-4">
                    {/* LinkedIn */}
                    <div className="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/kpoplnek.json"
                            trigger="hover"
                            colors="primary:#e4e4e4,secondary:#4bb3fd"
                            style={{ width: '45px', height: '45px' }}
                        />

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
                        <lord-icon
                            src="https://cdn.lordicon.com/lllcnxva.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000"
                            style={{width: '45px', height: '45px'}} 
                        />
                        
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
                        <lord-icon
                            src="https://cdn.lordicon.com/uufkkpxl.json"
                            trigger="hover"
                            colors="primary:#f24c00,secondary:#e4e4e4"
                            style={{ width: '45px', height: '45px', backgroundColor: 'transparent' }}
                        />

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
                        <lord-icon
                            src="https://cdn.lordicon.com/guvfanks.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: '35px', height: '45px', backgroundColor: '#ffffff', borderRadius: '20%' }}
                        />

                        <a
                            href="https://x.com/deshmukh_bramha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-lg text-blue-500 hover:underline"
                        >
                            Twitter
                        </a>
                    </div>

                    {/* Resume */}
                    <div className="flex items-center">
                        <ShinyText
                            text="Resume"
                            disabled={false}
                            speed={1}
                            className="home"
                            onClick={() => window.open('./bramha_deshmukh_resume.pdf', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
