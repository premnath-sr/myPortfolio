import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-4.svg';
//import Me from '../../assets/data.png';

import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='350' />
                <h1 className="home__name">Premnath Saravanan</h1>
                <span className="home__education">
                    Software Engineer @NetApp | MS in ECE - Computer Systems and Software | Former Embedded Software Developer @Nokia | Ex-Senior Software Engineer @Infosys.
                    <br />
                    | C/C++ • Linux • Drivers • Kernels • Python • Systems Software • Firmware |
                </span>
                <br />
                <br />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home