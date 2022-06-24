import React from 'react'
import styles from '../styles/Contact.module.css'

function contact(props) {
  const { bgColor, fgColor , acColor } = props.theme;

  return (
    <div style={{color:acColor}} className={styles.container}>
      <h1>Contact me</h1>
      <div className={styles.divide}>
        <div className={styles.part1}>
        <div className={styles.social}>
        <div className='badge'>
          <span className='inner'>Social 
            <span>: you can directly message me from here.</span>
          </span>
        </div>
        <p align="left">
          <a href="http://www.instagram.com/ig_akash369" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/instagram.svg" width="30" height="30" /></a> 
          <a href="https://www.linkedin.com/in/akash-yadav-36aa56230/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="30" height="30" /></a>
          <a href="https://www.twitter.com/akash_369_" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/twitter.svg" width="30" height="30" /></a>
        </p>
        <div className='badge'>
          <span className='inner'>Github 
            <span>: explore my open-source work.</span>
          </span>
        </div>
        <p>
          <a href="https://www.github.com/aksh-git" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/github.svg" width="30" height="30" /></a> 
        </p>
        
      </div>
        </div>
        <div className={styles.part2}>
          <div className='badge'>
            <span className='inner'>Email 
              <span></span>
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
} 

export default contact