import React, { useEffect, useState } from 'react';
import Loder from '../components/Loder';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/project.module.css'

function project(props) {
  const { bgColor, fgColor , acColor } = props.theme;
  const [projects, setProjects] = useState([]);

  const updateProjects = async () => {
    try {
      const projectURL = 'https://raw.githubusercontent.com/aksh-git/helpers/main/projects.json';
      let data = await fetch(projectURL);
      let parsedData = await data.json();
      setProjects(parsedData.project);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    updateProjects()
  }, []);

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div style={{display:projects.length>1?'none':'flex',justifyContent:'center'}}>
        <Loder />
      </div>
      <div className={styles.pgrid}>
        {projects.map((proj)=>{
          return(
            <ProjectCard theme={props.theme} project={proj} key={proj.projectURL}/>
          )
        })}
      </div>
    </div>
  )
}

export default project