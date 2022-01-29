import React from 'react';
import { projectInformation } from './projectInformation';
import ProjectListElement from './poject-list-element/project-list-element.component';
import './projects-list.styles.css';


const ProjectsList = () => {
    return (
        <div className='projects-list'>
            {projectInformation.map(ele => <ProjectListElement key={ele.id} project={ele} />)}
        </div>
    )
}

export default ProjectsList;