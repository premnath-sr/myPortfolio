import React from 'react';
import './Education.css';
import Image1 from '../../assets/northeastern.png';
import Image2 from '../../assets/anna.png';

const Education = () => {
    return (
        <section className="about container section" id="education">
            <h2 className="section__title">Education </h2>

            <div className="about__container grid">
                <img src={Image1} alt="Anna University" className="education__img education__img--small" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p>
                        <strong>Master of Science in Electrical and Computer Engineering - Specialized in Computer Systems and Software.</strong>
                        </p>
                        <p>
                        <strong>Northeastern University, Boston, MA.</strong>
                        </p>   
                        <p>
                        <strong>December 2023.</strong>
                        </p>  
                        <br/>  
                        <p>
                        Courses Taken: Computer Architecture, Robotics Sensing & Navigation, High-PerformanceComputing, Assistive Robotics, Fundamentals of Computer Engineering, Database Management System, Wireless Sensors and Intrnet of Things.
                        </p>                 
                    </div>
                </div>
            </div>
            <br/>
            <div className="about__container grid">
                {/* <img src={Image2} alt="" className='about__img' /> */}
                <img src={Image2} alt="Anna University" className="education__img education__img--small" />


                <div className="about__data grid">
                    <div className="about__info">
                        <p>
                        <strong>Bachelor of Engineering in Electrical and Electronics Engineering</strong>
                        </p>
                        <p>
                        <strong>Anna University, Chennai, India</strong>
                        </p>          
                        <p>
                        <strong>May 2018.</strong>
                        </p>   
                        <br/>  
                        <p>
                        Courses Taken: Object Oriented Programming, Circuit Theory, Embedded Systems, Microcontroller Based System Design, Electronic Devices and Circuits, Digital Logic Circuits, Microprocessor and Microcontollers.
                        </p>                  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education