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
                            I am Dang Xuan Tung (Alex), a Senior Mobile Engineer and Tech Lead based in Hanoi, Vietnam. Over the past six years, I have architected and scaled cross-platform mobile systems for enterprise companies, including VMO Holdings and Synodus.
                        </p>
                        <p>
                            My primary specialty is Flutter and Dart, combined with deep native iOS engineering in Swift and Objective-C. I champion Clean Architecture and predictable state machines (BLoC, Cubit, Provider) to build robust codebases that remain maintainable across years of active feature development.
                        </p>
                        <p>
                            In production, I have led engineering teams delivering solutions at national scale: from Viettel Money's iOS payment ecosystem and Hoa Phat's nationwide retail warranty infrastructure, to biometric paperless governance systems for Vietnam's Ministry of Planning and Investment.
                        </p>
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
