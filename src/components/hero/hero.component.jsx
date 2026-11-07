import React from 'react';
import "./hero.styles.css";

const Hero = () => {
    const portraitUrl = "https://avatars.githubusercontent.com/u/94129871?s=400&u=2ecb4d2c2a87f8c50db7df2dabcb9fd4144422ee&v=4";

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
                            Six years of engineering leadership across high-scale fintech (Viettel Money), nationwide enterprise warranty networks (Hoa Phat), and government digital transformation systems (MPI Vietnam).
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
                        <img src={portraitUrl} alt="Alex Dang portrait" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
