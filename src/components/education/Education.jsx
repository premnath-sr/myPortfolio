import React from 'react';
import './Education.css';
import Image1 from '../../assets/northeastern.png';
import Image2 from '../../assets/anna.png';

const Education = () => {
    return (
        <section className="about container section" id="education">
            <h2 className="section__title">Education </h2>

            <div className="about__container grid">
                {/* <img src={Image1} alt="" className='about__img' /> */}
                <img src={Image1} alt="Anna University" className="education__img education__img--small" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p>
                        Master of Science in Electrical and Computer Engineering - Specialized in Computer Systems and Software .
                        </p>
                        <p>
                        Northeastern University, Boston, MA.
                        </p>   
                        <p>
                        December 2023.
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
                        Bachelor of Engineering in Electrical and Electronics Engineering
                        </p>
                        <p>
                        Anna University, Chennai, India
                        </p>          
                        <p>
                        May 2018.
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