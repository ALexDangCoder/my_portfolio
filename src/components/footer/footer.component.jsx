import React from 'react';
import "./footer.styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="bd-grid footer__grid">
                
                <div className="footer__top" data-reveal>
                    <div className="footer__role-group">
                        <span className="footer__role">Senior Mobile Engineer &amp; Tech Lead</span>
                        <span className="footer__location">Hanoi City, Vietnam</span>
                    </div>

                    <div className="footer__nav">
                        <a href="#home" className="footer__nav-link">Home</a>
                        <a href="#about" className="footer__nav-link">About</a>
                        <a href="#skills" className="footer__nav-link">Skills</a>
                        <a href="#work" className="footer__nav-link">Work</a>
                        <a href="#contact" className="footer__nav-link">Contact</a>
                    </div>
                </div>

                <div className="footer__monument" data-reveal>
                    ALEX DANG
                </div>

                <div className="footer__bottom">
                    <span className="footer__copyright">
                        &#169; {new Date().getFullYear()} Alex Dang (Dang Xuan Tung). All rights reserved.
                    </span>

                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            GitHub
                        </a>
                        <a href="mailto:AlexDangDev@gmail.com" className="footer__social-link">
                            Email
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
