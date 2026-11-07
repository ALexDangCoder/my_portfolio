import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import "./skills.styles.css";

const Skills = () => {
    useEffect(() => {
        sr.reveal('.skills__card', { interval: 150 });
    }, []);

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills__container bd-grid">
                
                {/* 1. Mobile Engineering */}
                <div className="skills__card">
                    <div className="skills__header">
                        <i className="bx bx-mobile-alt skills__header-icon"></i>
                        <div>
                            <h3 className="skills__subtitle">Mobile Engineering</h3>
                        </div>
                    </div>
                    <p className="skills__text">
                        <strong>6+ years</strong> building production iOS & Android apps with top performance, smooth 60fps animations, and native bridges.
                    </p>
                    <div className="skills__list">
                        
                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-flutter skills__item-icon"></i>
                                    Flutter & Dart
                                </span>
                                <span className="skills__badge">6+ YOE • Expert</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '95%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">MethodChannels</span>
                                <span className="skills__tag">Custom Painter</span>
                                <span className="skills__tag">FVM</span>
                                <span className="skills__tag">App Store & Play</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-apple skills__item-icon"></i>
                                    iOS Native (Swift / Obj-C)
                                </span>
                                <span className="skills__badge">3+ YOE • Advanced</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '85%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">UIKit</span>
                                <span className="skills__tag">SwiftUI</span>
                                <span className="skills__tag">RxSwift</span>
                                <span className="skills__tag">CocoaPods / SPM</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-android skills__item-icon"></i>
                                    Android (Java / Kotlin)
                                </span>
                                <span className="skills__badge">Advanced</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '80%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Gradle</span>
                                <span className="skills__tag">Background Services</span>
                                <span className="skills__tag">SDK Integration</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-chip skills__item-icon"></i>
                                    On-Device AI (MediaPipe)
                                </span>
                                <span className="skills__badge">Computer Vision</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage skills__percentage--accent" style={{ width: '85%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Pose Estimation</span>
                                <span className="skills__tag">Face Mesh</span>
                                <span className="skills__tag">Hand Tracking</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-react skills__item-icon"></i>
                                    React Native
                                </span>
                                <span className="skills__badge">Proficient</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '75%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Redux Saga</span>
                                <span className="skills__tag">Cross-Platform</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 2. Architecture & Patterns */}
                <div className="skills__card">
                    <div className="skills__header">
                        <i className="bx bx-layer skills__header-icon"></i>
                        <div>
                            <h3 className="skills__subtitle">Architecture & State</h3>
                        </div>
                    </div>
                    <p className="skills__text">
                        Designing scalable, testable, and maintainable enterprise codebases following industry best practices.
                    </p>
                    <div className="skills__list">

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-check-shield skills__item-icon"></i>
                                    Clean Architecture & SOLID
                                </span>
                                <span className="skills__badge">Lead Standard</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '95%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Domain / Data / Presentation</span>
                                <span className="skills__tag">UseCases</span>
                                <span className="skills__tag">Repository Pattern</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-git-repo-forked skills__item-icon"></i>
                                    BLoC / Cubit / Provider
                                </span>
                                <span className="skills__badge">Expert</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '95%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Stream / RxDart</span>
                                <span className="skills__tag">Event-driven State</span>
                                <span className="skills__tag">GetX</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-data skills__item-icon"></i>
                                    Offline-First & Local DB
                                </span>
                                <span className="skills__badge">Advanced</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '90%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">SQLite</span>
                                <span className="skills__tag">Hive / Isar</span>
                                <span className="skills__tag">Realm</span>
                                <span className="skills__tag">SharedPreferences</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-transfer-alt skills__item-icon"></i>
                                    Networking & Security
                                </span>
                                <span className="skills__badge">Enterprise</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '90%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">RESTful APIs</span>
                                <span className="skills__tag">WebSockets</span>
                                <span className="skills__tag">Dio / Retrofit</span>
                                <span className="skills__tag">Biometrics & Smart OTP</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. Web & Backend Fullstack */}
                <div className="skills__card">
                    <div className="skills__header">
                        <i className="bx bx-code-alt skills__header-icon"></i>
                        <div>
                            <h3 className="skills__subtitle">Web & Backend</h3>
                        </div>
                    </div>
                    <p className="skills__text">
                        Capable of building accompanying web dashboards, landing pages, and lightweight backend services.
                    </p>
                    <div className="skills__list">

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-react skills__item-icon"></i>
                                    React & Modern Frontend
                                </span>
                                <span className="skills__badge">Proficient</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '85%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">React 18</span>
                                <span className="skills__tag">Vite</span>
                                <span className="skills__tag">Tailwind CSS</span>
                                <span className="skills__tag">Responsive Web</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-typescript skills__item-icon"></i>
                                    TypeScript & Node.js
                                </span>
                                <span className="skills__badge">Advanced</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '80%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Express.js</span>
                                <span className="skills__tag">REST APIs</span>
                                <span className="skills__tag">Async / Await</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-go-lang skills__item-icon"></i>
                                    Go (Golang)
                                </span>
                                <span className="skills__badge">Service & Tools</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '75%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Automation</span>
                                <span className="skills__tag">Webhooks</span>
                                <span className="skills__tag">High Performance</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-python skills__item-icon"></i>
                                    Python
                                </span>
                                <span className="skills__badge">Practical</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '75%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Data Automation</span>
                                <span className="skills__tag">Scripting</span>
                                <span className="skills__tag">Backend APIs</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 4. DevOps, Cloud & Tooling */}
                <div className="skills__card">
                    <div className="skills__header">
                        <i className="bx bx-cog skills__header-icon"></i>
                        <div>
                            <h3 className="skills__subtitle">DevOps & Cloud Tools</h3>
                        </div>
                    </div>
                    <p className="skills__text">
                        Automating deployments, cloud infrastructure, and collaborative workflows with team efficiency.
                    </p>
                    <div className="skills__list">

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-firebase skills__item-icon"></i>
                                    Firebase Ecosystem
                                </span>
                                <span className="skills__badge">Advanced</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '90%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Firestore</span>
                                <span className="skills__tag">Push Notifications (FCM)</span>
                                <span className="skills__tag">Auth</span>
                                <span className="skills__tag">Crashlytics</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bxl-git skills__item-icon"></i>
                                    Git, CI/CD & Deploy
                                </span>
                                <span className="skills__badge">Lead Workflow</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '90%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">GitHub Actions</span>
                                <span className="skills__tag">GitLab CI</span>
                                <span className="skills__tag">Fastlane</span>
                                <span className="skills__tag">Code Review</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-devices skills__item-icon"></i>
                                    Store Release Management
                                </span>
                                <span className="skills__badge">App Store & Play</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '90%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Apple App Store Connect</span>
                                <span className="skills__tag">Google Play Console</span>
                                <span className="skills__tag">TestFlight</span>
                            </div>
                        </div>

                        <div className="skills__item">
                            <div className="skills__names">
                                <span className="skills__name-left">
                                    <i className="bx bx-terminal skills__item-icon"></i>
                                    IDE & Workflow Tools
                                </span>
                                <span className="skills__badge">Proficient</span>
                            </div>
                            <div className="skills__bar-container">
                                <div className="skills__percentage" style={{ width: '95%' }}></div>
                            </div>
                            <div className="skills__tags">
                                <span className="skills__tag">Xcode</span>
                                <span className="skills__tag">Android Studio</span>
                                <span className="skills__tag">VS Code</span>
                                <span className="skills__tag">Postman</span>
                                <span className="skills__tag">Figma</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
