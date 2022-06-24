import React from 'react'
import styles from '../styles/projectcard.module.css'

function ProjectCard(props) {
  const { title, decp, tools, imageURL, projectURL } = props.project;
  let { bgColor, fgColor , acColor } = props.theme;
  return (
    <div onClick={()=>window.open(projectURL)} style={{color:acColor,background:acColor+"2d"}} className={styles.projectCard}>
        <span className={styles.title}>{title}</span>
        <img src={imageURL} alt='Project-banner' />
        <span className={styles.decp}>{decp}</span>
        <span className={styles.foot}>
          <hr />
          <span className={styles.tools}><span className='bold'>Tools used -</span> {tools}</span>
        </span>
    </div>
  )
}

export default ProjectCard