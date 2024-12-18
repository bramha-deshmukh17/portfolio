import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
