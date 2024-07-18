import React, { useEffect } from 'react';
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
// Lumi mobile AI images
import CCVC1 from '../../assets/projects/ccvc/login_ccvc.png';
import CCVC2 from '../../assets/projects/ccvc/day_meet.png';
import CCVC3 from '../../assets/projects/ccvc/day_list_meet.png';
import CCVC4 from '../../assets/projects/ccvc/Chat.png';

import './projects.styles.css';

const Projects = props => {

    useEffect(() => {
        sr.reveal('.work__img', { interval: 200 });
    }, []);

    const resumeLink = "https://www.figma.com/proto/ZTFnE0whWcUfyysIbJKuNo/%5BCCVC%5D-APP_B%E1%BB%99-K%E1%BA%BF-ho%E1%BA%A1ch-v%C3%A0-%C4%90%E1%BA%A7u-t%C6%B0_v2.0.1?node-id=2023-39465&starting-point-node-id=2023%3A39465";

    return (
        <section className="work section" id="work">
            <h2 className="section-title">Highlight Projects</h2>
            <h3>HypeSociety Projects - Flutter</h3>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={HypeApp1} alt="project1" /></div>
                <div className="work__img"><img src={HypeApp2} alt="project2" /></div>
                <div className="work__img"><img src={HypeApp3} alt="project3" /></div>
                <div className="work__img"><img src={HypeApp4} alt="project4" /></div>
                <div className="work__img"><img src={HypeApp5} alt="project1" /></div>
                <div className="work__img"><img src={HypeApp6} alt="project2" /></div>
                <div className="work__img"><img src={HypeApp7} alt="project3" /></div>
                <div className="work__img"><img src={HypeApp8} alt="project4" /></div>
            </div>
            <h3>HypeSociety web for Advertiser - Flutter web</h3>
            <div className="work__container_web2 bd-grid">
                <div className="work__img"><img src={HypeWeb1} alt="advertiser project1" /></div>
                <div className="work__img"><img src={HypeWeb2} alt="advertiser project2" /></div>
                <div className="work__img"><img src={HypeWeb3} alt="advertiser project3" /></div>
                <div className="work__img"><img src={HypeWeb4} alt="advertiser project4" /></div>
            </div>
            <h3>Lumi Projects - Flutter</h3>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={Lumi1} alt="project1" /></div>
                <div className="work__img"><img src={Lumi2} alt="project2" /></div>
                <div className="work__img"><img src={Lumi3} alt="project3" /></div>
                <div className="work__img"><img src={Lumi4} alt="project4" /></div>
            </div>
            <h3>Document Management App For Government</h3>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={CCVC1} alt="project1" /></div>
                <div className="work__img"><img src={CCVC2} alt="project2" /></div>
                <div className="work__img"><img src={CCVC3} alt="project3" /></div>
                <div className="work__img"><img src={CCVC4} alt="project4" /></div>
            </div>
            <div>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="about__button button">Try App For Government</a>
            </div>
        </section>
    );
}

export default Projects;
