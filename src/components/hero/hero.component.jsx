import React from 'react';
import portraitImg from "../../assets/img/alex-dang-portrait.jpg";
import "./hero.styles.css";

const Hero = () => {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__grid">
                
                <h1 className="home__monument">
                    ALEX DANG
                </h1>

                <div className="home__content-split">
                    <div className="home__statement-group">
                        <p className="home__statement">
                            Senior Mobile Engineer and Tech Lead. Architecting production Flutter and iOS native applications serving millions of users.
                        </p>
                        <p className="home__subtext">
                            Six years of engineering leadership across high-scale fintech (Viettel Money), national data exchange platforms (VNDT), enterprise ecosystems at KCI Solutions, and nationwide retail warranty networks (Hoa Phat).
                        </p>
                        <div className="home__actions">
                            <a href="#work" className="button button--dark">
                                View Selected Work
                            </a>
                            <a href="#contact" className="button button--ghost">
                                Start Conversation
                            </a>
                        </div>
                        <div className="home__socials">
                            <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                                LinkedIn
                            </a>
                            <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer" className="home__social-link">
                                GitHub
                            </a>
                            <a href="mailto:AlexDangDev@gmail.com" className="home__social-link">
                                Email
                            </a>
                        </div>
                    </div>

                    <div className="home__visual-frame">
                        <img src={portraitImg} alt="Alex Dang portrait" fetchPriority="high" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
