/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logoImg from '../../assets/img/logo.png';
import './header.styles.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const resumeLink = "https://www.topcv.vn/xem-cv/VAZTXAMFBFNTVlQADlEABARQBgZWVgcHBQVfAQ8998";

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#home" className="nav__logo" onClick={closeMenu}>
                        <img src={logoImg} alt="Alex Dang Logo" className="nav__logo-icon" />
                        <span>ALEX DANG</span>
                    </a>
                </div>
                <div className={`nav__menu ${showMenu ? 'show' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={closeMenu}>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link" onClick={closeMenu}>Work</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a>
                        </li>
                        <li className="nav__item">
                            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="nav__link nav__link--highlight">
                                Curriculum Vitae
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)} aria-label="Toggle Navigation">
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
