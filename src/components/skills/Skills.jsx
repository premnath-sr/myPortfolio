import React from 'react';
import './Skills.css';
import Image1 from '../../assets/c.svg';
import Image2 from '../../assets/c++.svg';
import Image3 from '../../assets/python.svg';
import Image4 from '../../assets/cuda.jpg';
import Image5 from '../../assets/ros.jpg';
import Image6 from '../../assets/communicationprotocol.png';
import Image7 from '../../assets/os.png';
import Image8 from '../../assets/linux.png';
import Image9 from '../../assets/rtos.png';
import Image10 from '../../assets/mysql.svg';
import Image11 from '../../assets/git.svg';
import Image12 from '../../assets/scripting.png';
import Image13 from '../../assets/debug.svg';

const data = [
    {
        id: 1,
        image: Image1,
        title: "C",
    },
    {
        id: 2,
        image: Image2,
        title: "C++",
    },
    {
        id: 3,
        image: Image3,
        title: "Python",
    },
    {
        id: 4,
        image: Image4,
        title: "CUDA",
    },
    {
        id: 5,
        image: Image5,
        title: "ROS",
    },
    {
        id: 6,
        image: Image6,
        title: "Communication Protocols",
    },
    {
        id: 7,
        image: Image7,
        title: "OS & Kernels",
    },
    {
        id: 8,
        image: Image8,
        title: "Linux",
    },
    {
        id: 9,
        image: Image9,
        title: "RTOS",
    },
    {
        id: 10,
        image: Image10,
        title: "MySQL",
    },
    {
        id: 11,
        image: Image11,
        title: "Git",
    },
    {
        id: 12,
        image: Image12,
        title: "Scripting",
    },
    {
        id: 13,
        image: Image13,
        title: "Debugging & Performance Analysis",
    }
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container">
                {data.map(({ id, image, title }) => {
                    return (
                        <div className="skills__card" key={id}>
                            <img src={image} alt={title} className="skills__img" />
                            <h3 className="skills__title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;
