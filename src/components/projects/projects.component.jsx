import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import sr from '../../utils/scrollReveal';

// hype mobile images
import HypeApp1 from '../../assets/projects/7845DB0F-E14E-48E4-86F3-758433CCF3C4.png';
import HypeApp2 from '../../assets/projects/FILTER_IF.png';
import HypeApp3 from '../../assets/projects/IF_blocked.png';
import HypeApp4 from '../../assets/projects/IF_overview_blocked.png';
import HypeApp5 from '../../assets/projects/04_Plattform_empty.png';
import HypeApp6 from '../../assets/projects/if_04_what todo with link.png';
import HypeApp7 from '../../assets/projects/tiktok Scan.png';
import HypeApp8 from '../../assets/projects/tiktok_overview_short.png';

// hype web images
import HypeWeb1 from '../../assets/projects/Influencer_profile.png';
import HypeWeb2 from '../../assets/projects/login.png';
import HypeWeb3 from '../../assets/projects/Campaigns.png';
import HypeWeb4 from '../../assets/projects/Choose_Influnecers.png';

// Lumi mobile AI images
import Lumi1 from '../../assets/projects/unnamed.webp';
import Lumi2 from '../../assets/projects/unnamed1.webp';
import Lumi3 from '../../assets/projects/unnamed2.webp';
import Lumi4 from '../../assets/projects/unnamed3.webp';

// CCVC Government images
import CCVC1 from '../../assets/projects/ccvc/login_ccvc.png';
import CCVC2 from '../../assets/projects/ccvc/day_meet.png';
import CCVC3 from '../../assets/projects/ccvc/day_list_meet.png';
import CCVC4 from '../../assets/projects/ccvc/Chat.png';

import './projects.styles.css';

Modal.setAppElement('#root');

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        sr.reveal('.work__project-block', { interval: 150 });
        sr.reveal('.work__os-card', { interval: 150 });
    }, []);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <section className="work section" id="work">
            <h2 className="section-title">Featured Projects</h2>
            <p className="work__section-desc">
                A selection of high-impact enterprise mobile applications, government digital transformation systems, and open-source architectures.
            </p>

            <div className="bd-grid">

                {/* 1. HypeSociety */}
                <div className="work__project-block">
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">HypeSociety Influencer Marketing Platform</h3>
                            <div className="work__project-meta">
                                <span className="work__badge">Role: Flutter Tech Lead</span>
                                <span className="work__badge work__badge--purple">Team: 6 Members</span>
                                <span className="work__badge">Mobile • Desktop MacOS • Web</span>
                            </div>
                        </div>
                        <div className="work__links">
                            <a href="https://apps.apple.com/us/app/hypesociety-hire-influencer/id6447349072" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--apple">
                                <i className="bx bxl-apple"></i> App Store
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.hypesociety.app" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--google">
                                <i className="bx bxl-play-store"></i> Google Play
                            </a>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Built the foundational Clean Architecture base for an influencer marketplace matching advertisers with creators. Integrated Instagram and TikTok APIs for real-time engagement analytics, campaign tracking, and automated payout systems. Delivered 100% pixel-perfect UI across iOS, Android, and macOS Admin.
                    </p>
                    <div className="work__tags">
                        <span className="work__tag">Flutter</span>
                        <span className="work__tag">Clean Architecture</span>
                        <span className="work__tag">BLoC / Provider</span>
                        <span className="work__tag">TikTok & IG Graph API</span>
                        <span className="work__tag">Flutter Web</span>
                        <span className="work__tag">MacOS Admin</span>
                    </div>

                    <h4 style={{ margin: '1rem 0 0.5rem', color: '#374151', fontSize: '0.95rem' }}>Mobile App Screenshots</h4>
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

                    <h4 style={{ margin: '1.5rem 0 0.5rem', color: '#374151', fontSize: '0.95rem' }}>Advertiser Web Dashboard (Flutter Web)</h4>
                    <div className="work__container_web2">
                        <div className="work__img" onClick={() => openModal(HypeWeb1)}><img src={HypeWeb1} alt="HypeSociety web 1" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb2)}><img src={HypeWeb2} alt="HypeSociety web 2" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb3)}><img src={HypeWeb3} alt="HypeSociety web 3" /></div>
                        <div className="work__img" onClick={() => openModal(HypeWeb4)}><img src={HypeWeb4} alt="HypeSociety web 4" /></div>
                    </div>
                </div>

                {/* 2. CCVC - Document Management App For Government */}
                <div className="work__project-block">
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Government Document Management (CCVC)</h3>
                            <div className="work__project-meta">
                                <span className="work__badge">Ministry of Planning &amp; Investment (MPI)</span>
                                <span className="work__badge work__badge--green">Role: Core Mobile Developer</span>
                                <span className="work__badge">Phone &amp; Tablet</span>
                            </div>
                        </div>
                        <div className="work__links">
                            <a href="https://apps.apple.com/us/app/empi-vietnam/id1524442944" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--apple">
                                <i className="bx bxl-apple"></i> App Store
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=mpi.gov.vn" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--google">
                                <i className="bx bxl-play-store"></i> Google Play
                            </a>
                            <a href="https://www.figma.com/proto/ZTFnE0whWcUfyysIbJKuNo/%5BCCVC%5D-APP_B%E1%BB%99-K%E1%BA%BF-ho%E1%BA%A1ch-v%C3%A0-%C4%90%E1%BA%A7u-t%C6%B0_v2.0.1?node-id=2023-39465&starting-point-node-id=2023%3A39465" target="_blank" rel="noopener noreferrer" className="work__link-btn">
                                <i className="bx bxl-figma"></i> Figma Prototype
                            </a>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Enterprise digital transformation solution for government officials to track ministerial decrees, draft documents, manage tasks, and conduct paperless meetings. Engineered biometric security (Fingerprint / FaceID), Smart OTP integration, text-to-speech meeting synthesizers, and real-time offline document caches.
                    </p>
                    <div className="work__tags">
                        <span className="work__tag">Flutter</span>
                        <span className="work__tag">MVVM Clean Architecture</span>
                        <span className="work__tag">Biometric Auth</span>
                        <span className="work__tag">Smart OTP</span>
                        <span className="work__tag">Text-to-Speech</span>
                        <span className="work__tag">Offline Cache</span>
                    </div>

                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(CCVC1)}><img src={CCVC1} alt="CCVC screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC2)}><img src={CCVC2} alt="CCVC screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC3)}><img src={CCVC3} alt="CCVC screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(CCVC4)}><img src={CCVC4} alt="CCVC screen 4" /></div>
                    </div>
                </div>

                {/* 3. Lumi Smart IoT & Computer Vision */}
                <div className="work__project-block">
                    <div className="work__project-header">
                        <div className="work__project-title-group">
                            <h3 className="work__project-title">Lumi Smart Home &amp; AI Camera</h3>
                            <div className="work__project-meta">
                                <span className="work__badge">Smart IoT &amp; AI</span>
                                <span className="work__badge work__badge--purple">Role: Flutter Engineer</span>
                            </div>
                        </div>
                    </div>
                    <p className="work__project-desc">
                        Cross-platform mobile controller for smart home automation and AI-powered security cameras. Implemented real-time WebSockets event streaming, low-latency live camera view, scenario automation triggers, and smooth device status synchronization.
                    </p>
                    <div className="work__tags">
                        <span className="work__tag">Flutter</span>
                        <span className="work__tag">IoT / WebSockets</span>
                        <span className="work__tag">Live Video Stream</span>
                        <span className="work__tag">BLoC State</span>
                    </div>

                    <div className="work__container">
                        <div className="work__img" onClick={() => openModal(Lumi1)}><img src={Lumi1} alt="Lumi screen 1" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi2)}><img src={Lumi2} alt="Lumi screen 2" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi3)}><img src={Lumi3} alt="Lumi screen 3" /></div>
                        <div className="work__img" onClick={() => openModal(Lumi4)}><img src={Lumi4} alt="Lumi screen 4" /></div>
                    </div>
                </div>

                {/* 4. Open-Source & Enterprise Engineering Showcases */}
                <h3 style={{ fontSize: '1.6rem', margin: '2rem 0 1rem', color: '#111827', textAlign: 'left' }}>
                    🚀 Open Source &amp; Architecture Showcases
                </h3>

                <div className="work__opensource-grid">
                    
                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bxl-flutter" style={{ color: '#02569B' }}></i>
                                mineral_management
                            </h4>
                            <p className="work__os-desc">
                                Enterprise Mining Resource Management mobile application built with Flutter, Clean Architecture, BLoC/Cubit, Google Maps integration, and real-time alert notifications.
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">Flutter</span>
                                <span className="work__tag">BLoC/Cubit</span>
                                <span className="work__tag">Google Maps</span>
                                <span className="work__tag">Clean Arch</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://github.com/ALexDangCoder/mineral_management" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--github">
                                <i className="bx bxl-github"></i> View GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bx-chip" style={{ color: '#10B981' }}></i>
                                demo_scan_body_FlutterWithMediaPipe
                            </h4>
                            <p className="work__os-desc">
                                Real-time on-device AI computer vision project utilizing Google MediaPipe inside Flutter for live body pose estimation, face mesh landmarks, and hand tracking.
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">MediaPipe</span>
                                <span className="work__tag">Computer Vision</span>
                                <span className="work__tag">Pose Estimation</span>
                                <span className="work__tag">Flutter</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://github.com/ALexDangCoder/demo_scan_body_FlutterWithMediaPipe" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--github">
                                <i className="bx bxl-github"></i> View GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bx-layer" style={{ color: '#4070F4' }}></i>
                                flutter_base_bloc_cubit_syn
                            </h4>
                            <p className="work__os-desc">
                                Modern production-ready Flutter 3.35+ starter architecture boilerplate with complete separation of concerns, BLoC &amp; Cubit, FVM version pinning, and CI/CD pipelines.
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">Flutter 3.35+</span>
                                <span className="work__tag">Boilerplate</span>
                                <span className="work__tag">BLoC/Cubit</span>
                                <span className="work__tag">FVM</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://github.com/ALexDangCoder/flutter_base_bloc_cubit_syn" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--github">
                                <i className="bx bxl-github"></i> View GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bx-wallet" style={{ color: '#F59E0B' }}></i>
                                flutter-crypto-trading-wallet
                            </h4>
                            <p className="work__os-desc">
                                Complete cryptocurrency trading and crypto wallet UI Kit for Flutter with responsive modern dark mode, token charts, transaction flows, and smooth micro-animations.
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">Flutter</span>
                                <span className="work__tag">Crypto Wallet</span>
                                <span className="work__tag">Trading UI</span>
                                <span className="work__tag">Dart</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://github.com/ALexDangCoder/flutter-crypto-trading-wallet" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--github">
                                <i className="bx bxl-github"></i> View GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bxl-react" style={{ color: '#61DAFB' }}></i>
                                ytfsoft_landing_page
                            </h4>
                            <p className="work__os-desc">
                                Official responsive landing page for YTF Soft built with React, Vite, Tailwind CSS, and dynamic headless CMS integration using Google Sheets API.
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">React</span>
                                <span className="work__tag">Vite</span>
                                <span className="work__tag">Tailwind CSS</span>
                                <span className="work__tag">Sheets API</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://github.com/ALexDangCoder/ytfsoft_landing_page" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--github">
                                <i className="bx bxl-github"></i> View GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="work__os-card">
                        <div>
                            <h4 className="work__os-title">
                                <i className="bx bxl-apple" style={{ color: '#000000' }}></i>
                                Viettel Money &amp; Điện Máy Hòa Phát
                            </h4>
                            <p className="work__os-desc">
                                Commercial production applications serving millions of users across Vietnam. Viettel Money (iOS Developer - Swift/RxSwift) and Điện Máy Hòa Phát (Flutter Tech Lead - Clean Architecture).
                            </p>
                            <div className="work__tags">
                                <span className="work__tag">Viettel Money</span>
                                <span className="work__tag">Hòa Phát</span>
                                <span className="work__tag">Swift / iOS</span>
                                <span className="work__tag">Flutter Lead</span>
                            </div>
                        </div>
                        <div className="work__links" style={{ margin: '1rem 0 0' }}>
                            <a href="https://apps.apple.com/vn/app/viettel-money/id1344204781" target="_blank" rel="noopener noreferrer" className="work__link-btn work__link-btn--apple">
                                <i className="bx bxl-apple"></i> Viettel Money iOS
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            {/* Modal preview */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Screenshot Preview"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="modal-content">
                    <img src={selectedImage} alt="Selected project" className="modal-img" />
                    <button onClick={closeModal} className="close-button">Close Preview</button>
                </div>
            </Modal>
        </section>
    );
};

export default Projects;
