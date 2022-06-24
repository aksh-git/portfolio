import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Logo from '../components/Logo'
import { ImMail4 } from 'react-icons/im'

function contact(props) {
  const { bgColor, fgColor , acColor } = props.theme;
  const [error, seterror] = useState("Due to some internal error,email cound not be sent, please use email from app option.");

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
        <div className='separator'></div>
        <div className='badge'>
          <span className='inner'>Email 
            <span>: write in app (eg. gmail).</span>
          </span>
        </div>
        <p>
          <a href="mailto:sharewithakashyadav@gmail.com" target="_blank" rel="noreferrer"><ImMail4 style={{fontSize:30,color:'#ca1b24'}} /></a> 
        </p>
        <div className='separator'></div>
        <div className='badge'>
          <span className='inner'>Github 
            <span>: explore my open-source work.</span>
          </span>
        </div>
        <p>
          <a href="https://www.github.com/aksh-git" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/github.svg" width="30" height="30" /></a> 
        </p><div className='separator'></div>
      </div>
        </div>
        <div className={styles.part2}>
          <div className='badge'>
            <span className='inner'>Email 
              <span>: write anything you got for me.</span>
            </span>
          </div>
          <div className={styles.emailContainer}>
            {error.length>2 && 
              <div className={styles.errorTv}>
              <span>{error}</span>
              </div>}
            <form>
              <input type="text" placeholder='Your Name' required/>
              <input type="email" placeholder='your_name@email.com' required/>
              <textarea rows="4" placeholder='Please write your message here...' maxLength={500} line="4" required></textarea>
              <div className={styles.formsbtn}>
                <button className={styles.cancel}>Reset</button>
                <button className={styles.send}>Send Mail</button>
              </div>
            </form>
          </div>
          <div style={{margin:"1rem 0 0 0"}} >
            <span style={{fontSize:'12px'}}>Please provide genuine information, so that we can communicate easily.</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Logo color={acColor}/>
      </div>
    </div>
  )
} 

export default contact