import './skill-rating.styles.css';
import React from 'react';

const SkillRating = ({skillName , icon}) => (
    <div className='skills-ratings_skill'>
        <img src={icon} alt="skill-icon" className="skill-image" />
        <h4 className='skills-ratings_skill__skillName'>{skillName}</h4>
    </div>
)

export default SkillRating;