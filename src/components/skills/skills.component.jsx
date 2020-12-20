import React from 'react';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';

import SkillRating from './skill-ratings/skill-rating.component';
import SkillTile from './skill-tile/still-tile.component';
import './skills.styles.css';

const Skills = () => (
    <div className='skills'>
        <div className="skills-about-myself">
            <h1>ABOUT MYSELF</h1>
            <div className="skills-about-myself_content">
                I am a 4th year student of batch 17-21.<br />
                Throughout my college life I have been <br />
                doing projects in Node as a REST API developer.<br />
                I am just starting in React.js
            </div>
            <div className='skills-about-myself_tiles'>
                <SkillTile 
                    icon={<FileCopyRoundedIcon />} 
                    num={12} 
                    event = {'Projects'} 
                />
                <SkillTile 
                    icon={<WebRoundedIcon />} 
                    num={4} 
                    event = {'Hackathons'} 
                />
                <SkillTile 
                    icon={<WorkOutlineRoundedIcon />} 
                    num={2} 
                    event = {'Internships'} 
                />
            </div>
        </div>
        <div className='skills-ratings'>
            <SkillRating 
                skillName='Node' 
                value={80} 
            />
            <SkillRating 
                skillName='MongoDB' 
                value={70} 
            />
            <SkillRating 
                skillName='SQL' 
                value={70} 
            />
            <SkillRating 
                skillName='React' 
                value={55} 
            />
        </div>
    </div>
)

export default Skills;