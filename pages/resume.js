import React from 'react'
import styles from '../styles/Resume.module.css'
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md'
import { BsTwitter,BsFillHeartFill } from 'react-icons/bs'
import { IoIosRocket } from 'react-icons/io'

function resume(props) {
  const { bgColor, fgColor , acColor } = props.theme;

  return (
    <div style={{color:acColor}} className={styles.container}>
      <h1>Akash Yadav</h1>
      <div className={styles.resume}>
        <div className={styles.part1}>
          <div className={styles.ritem}>
            <MdOutlineEmail className={styles.icon} />
            <span>sharewithakashyadav@gmail.com</span>
          </div>
          <div className={styles.ritem} >
            <MdLocationPin className={styles.icon} />
            <span>Ludhiana, Punjab-India</span>
          </div>
          <div className={styles.ritem} >
            <BsTwitter className={styles.icon} />
            <span><a rel="noreffer" href='https://twitter.com/akash_369_'>@akash_369_</a></span>
          </div>
          <div className={styles.mutliItemArea}>
            <div className={styles.rhead} >
              <IoIosRocket className={styles.icon} />
              <span>Skills</span>
            </div>
            <div className={styles.insideItem}>
              MERN Stack | Python | Django | JavaScript | Nextjs | HTML | CSS | Git | Github | My-SQL | AWS Cloud
            </div>
          </div>
          <div className={styles.mutliItemArea}>
            <div className={styles.rhead} >
              <BsFillHeartFill className={styles.icon} />
              <span>Interests</span>
            </div>
            <div className={styles.insideItem}>
              <div className={styles.ritem}>
                <span>Love to code</span>
              </div>
              <div className={styles.ritem}>
                <span>Astronomy</span>
              </div>
              <div className={styles.ritem}>
                <span>Old Music</span>
              </div>
              <div className={styles.ritem}>
                <span>Gardening : love to grow :)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          
        </div>
      </div>
    </div>
  )
}

export default resume