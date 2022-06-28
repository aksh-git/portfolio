import React from 'react'
import styles from '../styles/Resume.module.css'
import { MdLocationPin, MdOutlineEmail,MdOutlineGTranslate } from 'react-icons/md'
import { BsTwitter,BsFillHeartFill } from 'react-icons/bs'
import { IoIosRocket } from 'react-icons/io'
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineAim, AiOutlineExperiment } from 'react-icons/ai'
import Link from 'next/link'

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
          </div><br/>
          <div className={styles.mutliItemArea}>
            <div className={styles.rhead} >
              <IoIosRocket className={styles.icon} />
              <span>Skills</span>
            </div>
            <div className={styles.insideItem}>
              MERN Stack | Python | Django | JavaScript | Nextjs | HTML | CSS | Git | Github | My-SQL | AWS Cloud
            </div>
          </div><br/>
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
          </div><br/>
          <div className={styles.mutliItemArea}>
            <div className={styles.rhead} >
              <MdOutlineGTranslate className={styles.icon} />
              <span>Language</span>
            </div>
            <div className={styles.insideItem}>
              <div className={styles.ritem}>
                <span><strong>Read -</strong> Hindi, English, Punjabi</span>
              </div>
              <div className={styles.ritem}>
                <span><strong>Write -</strong> Hindi, English, Punjabi</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.mutliItemArea}>
            <div className={styles.rhead} >
              <AiOutlineAim className={styles.icon} />
              <span>Objective</span>
            </div>
            <div className={styles.insideItem}>
              As a recent graduate, I am  seeking a role which allows me to continue learning and perfecting my skills as i provide high-quality work, and encourages me to flourish as a full-stack developer.
            </div>
          </div><br/>
          <div className={styles.directedMultiItem}>
            <div className={styles.rhead} >
              <AiOutlineExperiment className={styles.icon} />
              <span>Experience</span>
            </div>
            <div className={styles.ditem}>
              <div className={styles.cslist}>
                <div className={styles.dhead}>
                  <div className={styles.headicon}>
                    <div className={styles.leftCircle}></div>
                    <span>Intern</span>
                  </div>
                </div>
              </div>
            </div>
          </div><br/>
          <div className={styles.directedMultiItem}>
            <div className={styles.rhead} >
              <FaGraduationCap className={styles.icon} />
              <span>Education</span>
            </div>
            <div className={styles.ditem}>
              <div className={styles.cslist}>
                <div className={styles.dhead}>
                  <div className={styles.headicon}>
                    <div className={styles.leftCircle}></div>
                    <span>Passed High School</span>
                  </div>
                  <span className={styles.year}>2018</span>
                </div>
                <div className={styles.content}>
                  <span>PSEB Board</span>
                  <span>Grade : A</span>
                </div>
              </div>
              <div className={styles.cslist}>
                <div className={styles.dhead}>
                  <div className={styles.headicon}>
                    <div className={styles.leftCircle}></div>
                    <span>Passed 12th -PCM</span>
                  </div>
                  <span className={styles.year}>2020</span>
                </div>
                <div className={styles.content}>
                  <span>PSEB Board</span>
                  <span>Grade : A</span>
                </div>
              </div>
              <div className={styles.cslist}>
                <div className={styles.dhead}>
                  <div className={styles.headicon}>
                    <div className={styles.leftCircle}></div>
                    <span>Bachelors in Computer Application | BCA </span>
                  </div>
                  <span className={styles.year}>2020-23</span>
                </div>
                <div className={styles.content}>
                  <span>Gulzar Group of Institutes</span>
                </div>
              </div>
              <div className={styles.cslist}>
                <div className={styles.dhead}>
                  <div className={styles.headicon}>
                    <div className={styles.leftCircle}></div>
                    <span>Masters in Computer Application | MCA </span>
                  </div>
                  <span className={styles.year}>2023-25</span>
                </div>
                <div className={styles.content}>
                  <span>Appearing...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <h3>Got anything for me ?</h3>
        <Link href="/Contact" rel="noreferrer"><button>Do Email</button></Link>
      </div>
    </div>
  )
}

export default resume