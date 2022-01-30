import './projects.styles.css';
import React from 'react';

import ProjectsList from '../../components/projects-list/projects-list.component';
import GeneralpageHeaderComponent from '../../components/page-general-header/generalpageHeader.component';


const Projects = () => (
    <div className='projects-overview'>
        <GeneralpageHeaderComponent text={'PROJECTS I have worked on...'} color={'rebeccapurple'} />
        <div className='projects-overview-list-container'>
            <ProjectsList/>
        </div>
    </div>
);

export default Projects;