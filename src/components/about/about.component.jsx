import React from 'react';
import './about.styles.css';

const About = () => {
    const resumeLink = "https://www.topcv.vn/xem-cv/VAZTXAMFBFNTVlQADlEABARQBgZWVgcHBQVfAQ8998";

    return (
        <section className="about" id="about">
            <div className="bd-grid">
                <h2 className="about__headline" data-reveal>Engineering Background</h2>
                
                <div className="about__grid">
                    <div className="about__narrative" data-reveal>
                        <p>
                            I am Dang Xuan Tung (Alex), a Senior Mobile Engineer and Tech Lead based in Hanoi, Vietnam. Over the past six years, I have architected and scaled cross-platform mobile systems and enterprise digital products, currently leading technical initiatives at KCI Solutions.
                        </p>
                        <p>
                            My primary specialty is Flutter and Dart, combined with deep native iOS engineering in Swift and Objective-C, along with modern fullstack architectures across Next.js, Go microservices, and NestJS. I champion Clean Architecture and predictable state machines (BLoC, Cubit, Provider) to build robust codebases that remain maintainable across years of active feature development.
                        </p>
                        <p>
                            In production, I have led engineering teams delivering solutions at national scale: from licensed fintech platforms (9Pay E-Wallet &amp; Loa TingTing Soundbox) and Web3 decentralized trading (XBIT), to Viettel Money's iOS payment ecosystem, Vietnam Data Exchange (VNDT), and paperless governance for Vietnam's Ministry of Planning and Investment.
                        </p>

                        <div className="about__timeline">
                            <h3 className="about__timeline-title">Career Milestones</h3>
                            <div className="about__timeline-list">
                                <div className="about__timeline-item">
                                    <div className="about__timeline-header">
                                        <span className="about__timeline-company">KCI Solutions</span>
                                        <span className="about__timeline-period">2024 — Present</span>
                                    </div>
                                    <span className="about__timeline-role">Technical Lead &amp; Senior Mobile Engineer</span>
                                    <p className="about__timeline-desc">
                                        Directing architectural strategy for Web3 trading platform XBIT, Vietnam Data Exchange (VNDT), CertEdge Global certification prep ecosystem, KCI Connect, and Noidi AI.
                                    </p>
                                </div>

                                <div className="about__timeline-item">
                                    <div className="about__timeline-header">
                                        <span className="about__timeline-company">9Pay (Fintech Intermediary)</span>
                                        <span className="about__timeline-period">2024 — 2025</span>
                                    </div>
                                    <span className="about__timeline-role">Senior Mobile Engineer</span>
                                    <p className="about__timeline-desc">
                                        Engineered core payment and gamification modules for 9Pay E-Wallet, architected the Loa TingTing merchant companion ecosystem for instant VietQR audio broadcasts, and built the 9Pay BD onboarding app.
                                    </p>
                                </div>

                                <div className="about__timeline-item">
                                    <div className="about__timeline-header">
                                        <span className="about__timeline-company">VMO Holdings</span>
                                        <span className="about__timeline-period">2023 — 2024</span>
                                    </div>
                                    <span className="about__timeline-role">Software Engineer &amp; Mobile Lead</span>
                                    <p className="about__timeline-desc">
                                        Led mobile engineering on Viettel Money iOS (Swift/RxSwift), Hoa Phat retail warranty network (Flutter), and HypeSociety cross-platform application.
                                    </p>
                                </div>

                                <div className="about__timeline-item">
                                    <div className="about__timeline-header">
                                        <span className="about__timeline-company">Synodus</span>
                                        <span className="about__timeline-period">2020 — 2023</span>
                                    </div>
                                    <span className="about__timeline-role">Mobile Developer</span>
                                    <p className="about__timeline-desc">
                                        Engineered enterprise Flutter and iOS applications, designed backend API integrations, and built offline-first caching mechanisms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about__actions">
                            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="button button--dark">
                                View Full Curriculum Vitae
                            </a>
                            <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    <div className="about__pillars" data-reveal>
                        <div className="about__pillar-item" data-reveal>
                            <span className="about__pillar-title">Technical Leadership</span>
                            <span className="about__pillar-desc">
                                Mentoring development teams, performing rigorous code reviews, establishing architectural baselines, and optimizing legacy systems ahead of release schedules.
                            </span>
                        </div>

                        <div className="about__pillar-item" data-reveal>
                            <span className="about__pillar-title">Clean Architecture &amp; Scale</span>
                            <span className="about__pillar-desc">
                                Strict separation between Domain, Data, and Presentation layers. Decoupled use-cases, offline-first local persistence, and testable business logic.
                            </span>
                        </div>

                        <div className="about__pillar-item" data-reveal>
                            <span className="about__pillar-title">Native Integration &amp; On-Device AI</span>
                            <span className="about__pillar-desc">
                                Writing high-performance native bridges (MethodChannels), integrating Google MediaPipe for real-time computer vision, and securing biometrics with Smart OTP.
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
