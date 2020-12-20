import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './skill-rating.styles.css';

const SkillRating = ({skillName , value}) => (
    <div className='skills-ratings_skill'>
        <h4 className='skills-ratings_skill__skillName'>{skillName + ' ' + value}</h4>
        <CircularProgress variant="determinate" value={value} />
    </div>
)

export default SkillRating;