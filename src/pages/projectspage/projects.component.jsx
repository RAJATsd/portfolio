import React from 'react';

import ProjectsList from '../../components/projects-list/projects-list.component';
import './projects.styles.css';


const Projects = () => (
    <div className='projects-overview'>
        <div className='projects-overview-container'>
            <div className='projects-overview-container__heading'>
                <h1>
                    PROJECTS <br />
                    I have worked on....
                </h1>            
            </div>
        </div>
        <div className='projects-overview-list-container'>
            <ProjectsList/>
        </div>
    </div>
);

export default Projects;