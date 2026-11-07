import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import { ReactComponent as Avatar } from "../../assets/img/mf-avatar.svg";
import "./hero.styles.css";

const Hero = () => {
    useEffect(() => {
        sr.reveal('.home__title', {}); 
        sr.reveal('.home__subtitle', { delay: 150 }); 
        sr.reveal('.home__buttons', { delay: 250 }); 
        sr.reveal('.home__img', { delay: 400 }); 
        sr.reveal('.home__social-icon', { interval: 150 }); 
    }, []);

    return (
        <section className="home bd-grid" id="home">
            <div className="home__profile bd-grid">
                <div className="home__img">
                    <Avatar />
                </div>
                <div className="home__social">
                    <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="home__social-icon" title="LinkedIn">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer" className="home__social-icon" title="GitHub">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="mailto:AlexDangDev@gmail.com" className="home__social-icon" title="Email">
                        <i className="bx bx-envelope"></i>
                    </a>
                    <a href="https://www.facebook.com/DevAlex0111" target="_blank" rel="noopener noreferrer" className="home__social-icon" title="Facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>
            </div>
            <div className="home__data">
                <span className="home__greeting">👋 Welcome to my portfolio</span>
                <h1 className="home__title">
                    Hi, I'm <span className="home__title-color">Alex Dang</span>
                    <br />
                    Senior Mobile Engineer
                </h1>
                <p className="home__subtitle">
                    Flutter Tech Lead &amp; iOS Specialist with <strong>6+ years</strong> building production-grade mobile applications, scalable architectures, and on-device AI.
                </p>
                <div className="home__buttons">
                    <a href="#work" className="button">View Projects</a>
                    <a href="#contact" className="button button--ghost">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
