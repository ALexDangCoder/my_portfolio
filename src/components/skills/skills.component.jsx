import React from 'react';
import "./skills.styles.css";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="bd-grid">
                <h2 className="skills__headline" data-reveal>Technical Capabilities</h2>
                <p className="skills__intro" data-reveal>
                    Specialized engineering across mobile runtimes, architectural patterns, and cloud platforms.
                </p>

                <div className="skills__grid">
                    
                    {/* Category 1 */}
                    <div className="skills__section" data-reveal>
                        <div className="skills__category-header">
                            <h3 className="skills__category-title">Mobile Engineering</h3>
                            <p className="skills__category-desc">
                                Core production expertise across cross-platform frameworks and native ecosystems.
                            </p>
                        </div>
                        <div className="skills__items-table">
                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Flutter &amp; Dart</span>
                                    <span className="skills__row-level">6+ Years • Lead</span>
                                </div>
                                <span className="skills__row-details">
                                    Clean Architecture, BLoC/Cubit, MethodChannels, Custom Painters, FVM, Performance Tuning.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">iOS Native (Swift &amp; Obj-C)</span>
                                    <span className="skills__row-level">3+ Years • Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    UIKit, SwiftUI, MVVM Clean Architecture, RxSwift, CocoaPods, Swift Package Manager.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Android (Java &amp; Kotlin)</span>
                                    <span className="skills__row-level">Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    Native services, Gradle orchestration, Material Design, Background worker tasks.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">On-Device AI (MediaPipe)</span>
                                    <span className="skills__row-level">Specialist</span>
                                </div>
                                <span className="skills__row-details">
                                    Real-time pose estimation, face landmark detection, and hand tracking running locally on mobile.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div className="skills__section" data-reveal>
                        <div className="skills__category-header">
                            <h3 className="skills__category-title">Architecture &amp; State</h3>
                            <p className="skills__category-desc">
                                Engineering reliable, testable software for enterprise systems.
                            </p>
                        </div>
                        <div className="skills__items-table">
                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Clean Architecture &amp; SOLID</span>
                                    <span className="skills__row-level">Standard</span>
                                </div>
                                <span className="skills__row-details">
                                    Layered Domain, Data, Presentation separation, UseCase orchestration, Repository pattern.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">BLoC, Cubit &amp; Provider</span>
                                    <span className="skills__row-level">Expert</span>
                                </div>
                                <span className="skills__row-details">
                                    Event-driven state management, reactive streams, RxDart, GetX state machines.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Offline-First &amp; Local DB</span>
                                    <span className="skills__row-level">Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    SQLite, Hive, Isar, Realm, Room, encrypted SharedPreferences caching.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Networking &amp; Security</span>
                                    <span className="skills__row-level">Enterprise</span>
                                </div>
                                <span className="skills__row-details">
                                    RESTful APIs, WebSockets streaming, Dio, Retrofit, Biometric auth, Smart OTP.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Category 3 */}
                    <div className="skills__section" data-reveal>
                        <div className="skills__category-header">
                            <h3 className="skills__category-title">Web &amp; Backend</h3>
                            <p className="skills__category-desc">
                                Accompanying web dashboards, admin portals, and lightweight backend services.
                            </p>
                        </div>
                        <div className="skills__items-table">
                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">React &amp; Modern Web</span>
                                    <span className="skills__row-level">Proficient</span>
                                </div>
                                <span className="skills__row-details">
                                    React 18, Vite, Tailwind CSS, Responsive Web Standards, State Hooks.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">TypeScript &amp; Node.js</span>
                                    <span className="skills__row-level">Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    Express APIs, Microservices, type-safe data validation, asynchronous I/O.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Go (Golang)</span>
                                    <span className="skills__row-level">Proficient</span>
                                </div>
                                <span className="skills__row-details">
                                    High-concurrency services, Telegram Bot webhooks, automated data scrapers.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Python</span>
                                    <span className="skills__row-level">Practical</span>
                                </div>
                                <span className="skills__row-details">
                                    Data automation scripts, backend utilities, API testing harnesses.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Category 4 */}
                    <div className="skills__section" data-reveal>
                        <div className="skills__category-header">
                            <h3 className="skills__category-title">DevOps &amp; Platforms</h3>
                            <p className="skills__category-desc">
                                Automated release pipelines and cloud infrastructure for mobile lifecycles.
                            </p>
                        </div>
                        <div className="skills__items-table">
                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Store Operations</span>
                                    <span className="skills__row-level">Production</span>
                                </div>
                                <span className="skills__row-details">
                                    Apple App Store Connect, Google Play Console, certificates, TestFlight beta tracks.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">CI/CD &amp; Automation</span>
                                    <span className="skills__row-level">Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    GitHub Actions, GitLab CI, Fastlane scripts, automated build distribution.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Firebase Ecosystem</span>
                                    <span className="skills__row-level">Advanced</span>
                                </div>
                                <span className="skills__row-details">
                                    Firestore, Cloud Functions, FCM Push Notifications, Authentication, Crashlytics.
                                </span>
                            </div>

                            <div className="skills__row">
                                <div className="skills__row-head">
                                    <span className="skills__row-name">Engineering Tools</span>
                                    <span className="skills__row-level">Daily</span>
                                </div>
                                <span className="skills__row-details">
                                    Xcode, Android Studio, VS Code, Postman, Figma, Docker containers.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;
