"use client";

import React, { useState } from 'react';
import projects from "@/assets/projects.json";
import ProjectCard from '../cards/projectCard';
import Label from '../label';

function ProjectSection() {

    const [projectData, setprojectData] = useState(projects.data);

    return (
        <div id="projects" className='w-full'>
            <Label>Projects</Label>
            {/** Card */}
            <div className='w-full flex flex-wrap gap-4 py-4 md:pr-3'>
                {projectData.map((projectData) => {
                    return <ProjectCard key={projectData?.github_url} data={projectData}></ProjectCard>
                })}
            </div>
        </div>
    )
}

export default ProjectSection