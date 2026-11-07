import React, { useState } from 'react';
import Modal from 'react-modal';

// Xbit Web3 & Perps DEX Images
import Xbit1 from '../../assets/projects/xbit/xbit_1.webp';
import Xbit2 from '../../assets/projects/xbit/xbit_2.webp';
import Xbit3 from '../../assets/projects/xbit/xbit_3.webp';
import Xbit4 from '../../assets/projects/xbit/xbit_4.webp';

// HypeSociety Mobile Images
import HypeApp1 from '../../assets/projects/7845DB0F-E14E-48E4-86F3-758433CCF3C4.png';
import HypeApp2 from '../../assets/projects/FILTER_IF.png';
import HypeApp3 from '../../assets/projects/IF_blocked.png';
import HypeApp4 from '../../assets/projects/IF_overview_blocked.png';
import HypeApp5 from '../../assets/projects/04_Plattform_empty.png';
import HypeApp6 from '../../assets/projects/if_04_what todo with link.png';
import HypeApp7 from '../../assets/projects/tiktok Scan.png';
import HypeApp8 from '../../assets/projects/tiktok_overview_short.png';

// HypeSociety Web Images
import HypeWeb1 from '../../assets/projects/Influencer_profile.png';
import HypeWeb2 from '../../assets/projects/login.png';
import HypeWeb3 from '../../assets/projects/Campaigns.png';
import HypeWeb4 from '../../assets/projects/Choose_Influnecers.png';

// Lumi Smart Home Images
import Lumi1 from '../../assets/projects/unnamed.webp';
import Lumi2 from '../../assets/projects/unnamed1.webp';
import Lumi3 from '../../assets/projects/unnamed2.webp';
import Lumi4 from '../../assets/projects/unnamed3.webp';

// CCVC Government Images
import CCVC1 from '../../assets/projects/ccvc/login_ccvc.png';
import CCVC2 from '../../assets/projects/ccvc/day_meet.png';
import CCVC3 from '../../assets/projects/ccvc/day_list_meet.png';
import CCVC4 from '../../assets/projects/ccvc/Chat.png';

import './projects.styles.css';

Modal.setAppElement('#root');

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <section className="work" id="work">
            <div className="bd-grid">
                <h2 className="work__headline" data-reveal>Selected Projects</h2>
                <p className="work__intro" data-reveal>
                    Commercial enterprise platforms, government software, and open-source systems.
                </p>

                {/* 1. XBIT: Web3 & Perps DEX */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">XBIT — Web3 Trading &amp; Perps DEX</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Lead Mobile Engineer</span>
                                <span className="work__meta-tag">Solana • Web3 DeFi</span>
                            </div>
                        </div>
                        <div className="work__links-row">
                            <a href="https://apps.apple.com/vn/app/xbit-buy-bitcoin-perps-dex/id6747072897" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                App Store
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.xtech.xbitmobile" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                Google Play
                            </a>
                            <a href="https://xbit.com" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                Platform
                            </a>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        High-frequency decentralized perpetuals (Perps DEX) and crypto trading mobile platform built on Solana. Engineered enterprise-grade MPC key management with Turnkey SDK (biometrics and passkey wallet creation), leveraged trading order book execution, real-time GraphQL market streaming feeds, automated Shorebird OTA code push CI/CD, and BLoC 9.0 reactive state architecture.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Flutter</span>
                        <span className="work__tag-item">Solana Web3</span>
                        <span className="work__tag-item">Turnkey SDK (MPC)</span>
                        <span className="work__tag-item">GraphQL Codegen</span>
                        <span className="work__tag-item">BLoC 9.0</span>
                        <span className="work__tag-item">Perps DEX</span>
                        <span className="work__tag-item">Shorebird OTA</span>
                    </div>

                    <h4 className="work__gallery-title">Mobile Interface Frames</h4>
                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(Xbit1)}><img src={Xbit1} alt="Xbit trading screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(Xbit2)}><img src={Xbit2} alt="Xbit wallet screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(Xbit3)}><img src={Xbit3} alt="Xbit prediction market screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(Xbit4)}><img src={Xbit4} alt="Xbit perps DEX screen 4" /></div>
                    </div>
                </div>

                {/* 2. Vietnam Data Exchange (VNDT) */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Vietnam Data Exchange (VNDT)</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Technical Lead</span>
                                <span className="work__meta-tag">National Enterprise Platform</span>
                            </div>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Nationwide digital data exchange and digital asset transaction platform. Engineered secure FIS SignHub electronic signing integration, enterprise customer negotiation workflow, real-time product listing operations, and Go microservices backend paired with Next.js web portals and React Native mobile exchange app.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Next.js</span>
                        <span className="work__tag-item">Go (Golang)</span>
                        <span className="work__tag-item">FIS SignHub</span>
                        <span className="work__tag-item">React Native</span>
                        <span className="work__tag-item">PostgreSQL</span>
                        <span className="work__tag-item">Microservices</span>
                    </div>
                </div>

                {/* 2. CertEdge Global */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">CertEdge Global Platform</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Fullstack &amp; Mobile Lead</span>
                                <span className="work__meta-tag">International EdTech</span>
                            </div>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        High-concurrency certification examination platform for international qualifications (PMP, PMI-ACP, Scrum). Architected Next.js 16 learner portal with React 19, NestJS 10 backend microservices, Prisma 5 ORM, VietQR automated payment processing, and Sentry production monitoring.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Next.js 16</span>
                        <span className="work__tag-item">React 19</span>
                        <span className="work__tag-item">NestJS 10</span>
                        <span className="work__tag-item">Prisma 5</span>
                        <span className="work__tag-item">PostgreSQL</span>
                        <span className="work__tag-item">VietQR</span>
                    </div>
                </div>

                {/* 3. Noidi AI Language Assistant */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Noidi (Wisbi AI Assistant)</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Flutter Lead</span>
                                <span className="work__meta-tag">AI Language Learning</span>
                            </div>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Interactive AI-powered language tutor mobile application. Implemented low-latency Server-Sent Events (SSE) streaming for real-time AI responses, speech recognition and audio synthesis pipelines, and custom liquid glass UI with BLoC state management.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Flutter</span>
                        <span className="work__tag-item">SSE Streaming</span>
                        <span className="work__tag-item">On-Device AI</span>
                        <span className="work__tag-item">BLoC / Cubit</span>
                        <span className="work__tag-item">WebSockets</span>
                    </div>
                </div>

                {/* 4. HypeSociety */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">HypeSociety Platform</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Flutter Tech Lead</span>
                                <span className="work__meta-tag">Mobile • Web • macOS</span>
                            </div>
                        </div>
                        <div className="work__links-row">
                            <a href="https://apps.apple.com/us/app/hypesociety-hire-influencer/id6447349072" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                App Store
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.hypesociety.app" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                Google Play
                            </a>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Built the foundational Clean Architecture base for an influencer marketplace matching advertisers with digital creators. Integrated Instagram and TikTok APIs for real-time engagement analytics, campaign tracking, and automated payout systems.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Flutter</span>
                        <span className="work__tag-item">Clean Architecture</span>
                        <span className="work__tag-item">BLoC / Provider</span>
                        <span className="work__tag-item">TikTok &amp; IG Graph API</span>
                        <span className="work__tag-item">Flutter Web</span>
                    </div>

                    <h4 className="work__gallery-title">Mobile Interface Frames</h4>
                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(HypeApp1)}><img src={HypeApp1} alt="HypeSociety screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp2)}><img src={HypeApp2} alt="HypeSociety screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp3)}><img src={HypeApp3} alt="HypeSociety screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp4)}><img src={HypeApp4} alt="HypeSociety screen 4" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp5)}><img src={HypeApp5} alt="HypeSociety screen 5" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp6)}><img src={HypeApp6} alt="HypeSociety screen 6" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp7)}><img src={HypeApp7} alt="HypeSociety screen 7" /></div>
                        <div className="work__img" onClick={() => openModal(HypeApp8)}><img src={HypeApp8} alt="HypeSociety screen 8" /></div>
                    </div>

                    <h4 className="work__gallery-title">Advertiser Web Workspace</h4>
                    <div className="work__container_web2">
                        <div className="work__img" onClick={() => openModal(HypeWeb1)}><img src={HypeWeb1} alt="HypeSociety web 1" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb2)}><img src={HypeWeb2} alt="HypeSociety web 2" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb3)}><img src={HypeWeb3} alt="HypeSociety web 3" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb4)}><img src={HypeWeb4} alt="HypeSociety web 4" /></div>
                    </div>
                </div>

                {/* 2. CCVC Government */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Government CCVC System</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">Ministry of Planning &amp; Investment</span>
                                <span className="work__meta-tag">Phone &amp; Tablet</span>
                            </div>
                        </div>
                        <div className="work__links-row">
                            <a href="https://apps.apple.com/us/app/empi-vietnam/id1524442944" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                App Store
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=mpi.gov.vn" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                Google Play
                            </a>
                            <a href="https://www.figma.com/proto/ZTFnE0whWcUfyysIbJKuNo/%5BCCVC%5D-APP_B%E1%BB%99-K%E1%BA%BF-ho%E1%BA%A1ch-v%C3%A0-%C4%90%E1%BA%A7u-t%C6%B0_v2.0.1?node-id=2023-39465&starting-point-node-id=2023%3A39465" target="_blank" rel="noopener noreferrer" className="button button--ghost">
                                Figma Prototype
                            </a>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Digital governance solution for ministerial decree processing, official task assignment, and paperless council meetings. Engineered biometric security, Smart OTP integration, text-to-speech synthesizers, and encrypted offline document caches.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Flutter</span>
                        <span className="work__tag-item">MVVM Clean Architecture</span>
                        <span className="work__tag-item">Biometric Auth</span>
                        <span className="work__tag-item">Smart OTP</span>
                        <span className="work__tag-item">Text-to-Speech</span>
                    </div>

                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(CCVC1)}><img src={CCVC1} alt="CCVC screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC2)}><img src={CCVC2} alt="CCVC screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC3)}><img src={CCVC3} alt="CCVC screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC4)}><img src={CCVC4} alt="CCVC screen 4" /></div>
                    </div>
                </div>

                {/* 3. Lumi Smart Home */}
                <div className="work__project-block" data-reveal>
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Lumi Smart Home</h3>
                            <div className="work__project-meta">
                                <span className="work__meta-tag">IoT Controller</span>
                                <span className="work__meta-tag">Core Flutter Engineer</span>
                            </div>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Cross-platform mobile controller for smart home automation and AI security cameras. Implemented real-time WebSockets event streaming, low-latency live camera view, scenario automation triggers, and smooth device status synchronization.
                    </p>
                    <div className="work__tags-row">
                        <span className="work__tag-item">Flutter</span>
                        <span className="work__tag-item">WebSockets</span>
                        <span className="work__tag-item">Live Video Stream</span>
                        <span className="work__tag-item">BLoC State</span>
                    </div>

                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(Lumi1)}><img src={Lumi1} alt="Lumi screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi2)}><img src={Lumi2} alt="Lumi screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi3)}><img src={Lumi3} alt="Lumi screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi4)}><img src={Lumi4} alt="Lumi screen 4" /></div>
                    </div>
                </div>

                {/* 4. Open-Source Codebases */}
                <div className="work__os-section" data-reveal>
                    <h3 className="work__os-headline">Open Source Codebases</h3>
                    <div className="work__os-list">

                        <div className="work__os-row" data-reveal>
                            <div className="work__os-info">
                                <span className="work__os-name">mineral_management</span>
                                <p className="work__os-desc">
                                    Enterprise Mining Resource Management mobile application built with Flutter, Clean Architecture, BLoC/Cubit, Google Maps integration, and real-time alert notifications.
                                </p>
                            </div>
                            <a href="https://github.com/ALexDangCoder/mineral_management" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                Repository
                            </a>
                        </div>

                        <div className="work__os-row" data-reveal>
                            <div className="work__os-info">
                                <span className="work__os-name">demo_scan_body_FlutterWithMediaPipe</span>
                                <p className="work__os-desc">
                                    Real-time on-device AI computer vision project utilizing Google MediaPipe inside Flutter for live body pose estimation, face mesh landmarks, and hand tracking.
                                </p>
                            </div>
                            <a href="https://github.com/ALexDangCoder/demo_scan_body_FlutterWithMediaPipe" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                Repository
                            </a>
                        </div>

                        <div className="work__os-row" data-reveal>
                            <div className="work__os-info">
                                <span className="work__os-name">flutter_base_bloc_cubit_syn</span>
                                <p className="work__os-desc">
                                    Modern production-ready Flutter 3.35+ starter architecture boilerplate with complete separation of concerns, BLoC &amp; Cubit, FVM version pinning, and CI/CD pipelines.
                                </p>
                            </div>
                            <a href="https://github.com/ALexDangCoder/flutter_base_bloc_cubit_syn" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                Repository
                            </a>
                        </div>

                        <div className="work__os-row" data-reveal>
                            <div className="work__os-info">
                                <span className="work__os-name">flutter-crypto-trading-wallet</span>
                                <p className="work__os-desc">
                                    Complete cryptocurrency trading and crypto wallet UI Kit for Flutter with responsive modern dark mode, token charts, transaction flows, and smooth micro-animations.
                                </p>
                            </div>
                            <a href="https://github.com/ALexDangCoder/flutter-crypto-trading-wallet" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                Repository
                            </a>
                        </div>

                        <div className="work__os-row" data-reveal>
                            <div className="work__os-info">
                                <span className="work__os-name">ytfsoft_landing_page</span>
                                <p className="work__os-desc">
                                    Official responsive landing page for YTF Soft built with React, Vite, Tailwind CSS, and dynamic headless CMS integration using Google Sheets API.
                                </p>
                            </div>
                            <a href="https://github.com/ALexDangCoder/ytfsoft_landing_page" target="_blank" rel="noopener noreferrer" className="button button--dark">
                                Repository
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Screenshot Zoom"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="modal-content">
                    <img src={selectedImage} alt="Enlarged screenshot" className="modal-img" />
                    <button onClick={closeModal} className="close-button">Close Preview</button>
                </div>
            </Modal>
        </section>
    );
};

export default Projects;
