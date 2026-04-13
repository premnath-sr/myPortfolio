import React from 'react';
import "./Contact.css";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactSocials = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contact</h2>
            <div className='contact__socials'>
                <a href='https://www.linkedin.com/in/premnath-s' className='home__social-link' target='_blank' rel='noreferrer'>
                    <FaLinkedinIn className="social-icon" />
                </a>
                <a href='mailto:premnath8397@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                    <FaEnvelope className="social-icon" />
                </a>
                <a href='#' className='home__social-link' target='_blank' rel='noreferrer'>
                    <FaInstagram className="social-icon" />
                </a>
                <a href='' className='home__social-link' target='_blank' rel='noreferrer'>
                    <FaFacebookF className="social-icon" />
                </a>
                <a href='' className='home__social-link' target='_blank' rel='noreferrer'>
                    <FaTwitter className="social-icon" />
                </a>
            </div>
        </section>
    );
};

export default ContactSocials;
