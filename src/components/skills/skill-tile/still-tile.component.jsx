import React from 'react';

import './skill-tile.styles.css';


const SkillTile = ({icon,num,event}) => (
    <div className='skills-about-myself_tile'>
        <div className='skills-about-myself_tile__item'>
            {icon}
        </div>
        <h1 className='skills-about-myself_tile__item'>{num}</h1>
        <h3 className='skills-about-myself_tile__item item-name'>{event}</h3>
    </div>
)

export default SkillTile;