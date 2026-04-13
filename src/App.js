import { useState } from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import ContactSocials from './components/contact/ContactSocials';
import Portfolio from './components/certifications/Certifications'
import Experience from './components/experience/Experience';
import Education from './components/education/Education';


function App() {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Portfolio />
                <ContactSocials />
            </main>
        </div>
    );
}

export default App;
