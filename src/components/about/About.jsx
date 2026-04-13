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
                        Hello! I’m Premnath, a passionate software developer with a Master’s degree in Electrical and Computer Engineering specialized in Computer Systems and Software from Northeastern University. 
                        My academic journey expanded my knowledge in areas such as Computer Architecture, Parallel Processing, 
                        Operating Systems, and many other advanced technologies. 
                        </p>
                        <p className="about__description">
                        My career journey includes roles as an Embedded Software Developer at Nokia and as a Software Engineer at Infosys, where I developed expertise in Software development, hardware integration, testing, and more.
                        </p>
                        <p className="about__description">
                        I’m passionate about creating optimized solutions that bring hardware and software together seamlessly. Whether it’s in the realm of Embedded Systems, 
                        Firmware Development, Low Level Software Development, Robotics, Autonomous Vehicles, or other cutting-edge technologies, I’m driven to make an impact through my work.
                        My focus is on developing software that’s not only efficient but also innovative, pushing the boundaries of what technology can achieve.
                        </p>
                        <p className="about__description">
                        If you're looking for someone who combines technical expertise with a commitment to innovation, I’m eager to collaborate and contribute to groundbreaking projects. 
                        Let’s create something extraordinary together!
                        </p>
                        <button className="btn" onClick={downloadResume}>View Resume</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About