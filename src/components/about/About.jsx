import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
import Resume from '../../assets/Premnath_Saravanan_Resume.pdf';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I’m Premnath — a passionate software developer focused on systems, low-level software, and performance-driven engineering. My career journey includes roles as Software Engineer at NetApp, as an Embedded Software Developer at Nokia and as a Software Engineer at Infosys.
                        </p>
                        <p className="about__description">
                        My experience is spans across the lower layers of the software stack, including Linux, kernel development, firmware, drivers, and system validation. I’ve worked on solving real engineering problems involving performance, reliability, debugging, and hardware-software integration, using tools and languages such as C, C++, and Python.
                        </p>
                        <p className="about__description">
                        I hold a Master’s degree in Electrical and Computer Engineering specialized in Computer Systems and Software from Northeastern University, where I expanded my knowledge in computer systems, operating systems, computer architecture, and parallel processing.
                        </p>
                        <p className="about__description">
                        What excites me most is building software that makes complex systems faster, more stable, and more efficient. I enjoy working in areas where software and hardware meet — whether that is embedded systems, firmware, platform software, device drivers, or other system-level technologies.
                        </p>
                        <p className="about__description">
                        I’m always looking for opportunities to contribute to challenging projects, learn from strong engineering teams, and build technology that is reliable, scalable, and thoughtfully designed.
                        </p>
                        <button className="btn" onClick={downloadResume}>View Resume</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About