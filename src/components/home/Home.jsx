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
                <span className="home__education">Highly dedicated and passionate professional with a strong background in software development 
                    and advanced expertise in computer engineering. Demonstrates meticulous attention to detail when multitasking, along with 
                    sharp analytical skills to proactively identify and resolve issues. Keen on staying updated with the latest advancements in 
                    engineering technology.</span>
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