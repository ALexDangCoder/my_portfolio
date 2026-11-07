import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import './about.styles.css';

const About = () => {
    useEffect(() => {
        sr.reveal('.about__img', {}); 
        sr.reveal('.about__subtitle', { delay: 150 }); 
        sr.reveal('.about__text', { delay: 200 }); 
        sr.reveal('.about__stats', { delay: 250 });
        sr.reveal('.about__actions', { delay: 300 });
    }, []);

    const onlinePicture = "https://avatars.githubusercontent.com/u/94129871?s=400&u=2ecb4d2c2a87f8c50db7df2dabcb9fd4144422ee&v=4";
    const resumeLink = "https://www.topcv.vn/xem-cv/VAZTXAMFBFNTVlQADlEABARQBgZWVgcHBQVfAQ8998";

    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about__container bd-grid">
                <div className="about__content">
                    <div className="about__img1">
                        <img src={onlinePicture} alt="Alex Dang profile" />
                    </div>
                    <span className="about__badge">Senior Mobile Engineer &amp; Tech Lead</span>
                    <h2 className="about__subtitle">Alex Dang (Đặng Xuân Tùng)</h2>
                    <p className="about__text">
                        Hello! I'm <strong>Alex Dang</strong>, an experienced Senior Mobile Engineer with over <strong>6 years</strong> in software development, specializing in <strong>Flutter</strong>, <strong>Dart</strong>, <strong>iOS Native (Swift / Objective-C)</strong>, and <strong>Android (Java)</strong>.
                    </p>
                    <p className="about__text">
                        Throughout my journey at <strong>VMO Holdings</strong> and <strong>Synodus</strong>, I have served as Mobile Tech Lead and core engineer on enterprise-grade applications serving millions of users — including <strong>Viettel Money</strong>, <strong>Điện Máy Hòa Phát</strong>, <strong>HypeSociety</strong>, and government digital transformation systems for the <strong>Ministry of Planning and Investment (CCVC)</strong>.
                    </p>
                    <p className="about__text">
                        I am passionate about <strong>Clean Architecture</strong>, maintainable state management (BLoC/Cubit), on-device computer vision with <strong>Google MediaPipe</strong>, and mentoring engineers to achieve rapid, high-quality product delivery.
                    </p>

                    <div className="about__stats">
                        <div className="about__stat-item">
                            <span className="about__stat-number">6+</span>
                            <span className="about__stat-label">Years of Experience</span>
                        </div>
                        <div className="about__stat-item">
                            <span className="about__stat-number">10+</span>
                            <span className="about__stat-label">Shipped Apps</span>
                        </div>
                        <div className="about__stat-item">
                            <span className="about__stat-number">Millions</span>
                            <span className="about__stat-label">Users Impacted</span>
                        </div>
                    </div>

                    <div className="about__actions">
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="about__button button">
                            <i className="bx bx-file"></i> View Full CV
                        </a>
                        <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="about__button button button--ghost">
                            <i className="bx bxl-linkedin"></i> LinkedIn Profile
                        </a>
                    </div>
                </div>

                <div className="about__img">
                    <img src={onlinePicture} alt="Alex Dang" />
                </div>
            </div>
        </section>
    );
};

export default About;
