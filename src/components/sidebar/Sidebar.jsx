import React, { useState } from "react";
import "./Sidebar.css";
// import Logo from "../../assets/logo.svg";
// import LightLogo from "../../assets/logo.svg";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiDraftLine,
    RiChat3Line,
    RiFileList3Line,
    RiMenu2Line,
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <RiFileList3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <RiDraftLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certifications" className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
