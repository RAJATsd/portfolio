import React from 'react';
import './homepage.styles.css';

import IntroBox from '../../components/intro-box/intro-box.component';
import Skills from '../../components/skills/skills.component';
import CareerTimeLine from '../../components/career-timeline-tabs/career-timeline-tabs.component';

const HomePage = () => (
    <div className= 'home-page'>
        <IntroBox/>
        <Skills/>
        <CareerTimeLine/>
    </div >
)

export default HomePage;