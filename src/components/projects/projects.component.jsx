import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import HypeApp1 from '../../assets/projects/7845DB0F-E14E-48E4-86F3-758433CCF3C4.png';
import HypeApp2 from '../../assets/projects/FILTER_IF.png';
import HypeApp3 from '../../assets/projects/IF_blocked.png';
import HypeApp4 from '../../assets/projects/IF_overview_blocked.png';
import HypeApp5 from '../../assets/projects/Influencer_profile.png';
import HypeApp6 from '../../assets/projects/login.png';
import HypeApp7 from '../../assets/projects/matching_book_now.png';
import Lumi1 from '../../assets/projects/unnamed.webp';
import Lumi2 from '../../assets/projects/unnamed1.webp';
import Lumi3 from '../../assets/projects/unnamed2.webp';
import Lumi4 from '../../assets/projects/unnamed3.webp';
import './projects.styles.css';

const Projects = props => {

    useEffect(() => {
        sr.reveal('.work__img', { interval: 200 }); 
    }, []);

    return (
        <section className="work section" id="work">
            <h2 className="section-title">Highlight Projects</h2>
            <h3>HypeSociety Projects</h3>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={HypeApp1} alt="project1" /></div>
                <div className="work__img"><img src={HypeApp2} alt="project2" /></div>
                <div className="work__img"><img src={HypeApp3} alt="project3" /></div>
                <div className="work__img"><img src={HypeApp4} alt="project4" /></div>
                <div className="work__img"><img src={HypeApp5} alt="project5" /></div>
                <div className="work__img"><img src={HypeApp6} alt="project6" /></div>
            </div>
            <h3>Lumi Projects</h3>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={Lumi1} alt="project1" /></div>
                <div className="work__img"><img src={Lumi2} alt="project2" /></div>
                <div className="work__img"><img src={Lumi3} alt="project3" /></div>
                <div className="work__img"><img src={Lumi4} alt="project4" /></div>
            </div>
        </section>
    );
}

export default Projects;
