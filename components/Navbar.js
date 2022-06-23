import { useRouter } from 'next/router';
import { GoHome } from 'react-icons/go';
import { BiCodeAlt, BiCertification } from 'react-icons/bi';
import { RiUser6Line } from 'react-icons/ri';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';
import React from 'react';
import { useState } from 'react'
import styles from '../styles/Navbar.module.css';
import Logo from './logo';
import Link from 'next/Link';

function Navbar(props) {

  let { bgColor, fgColor , acColor } = props.theme;
  const router = useRouter()
  let path = router.pathname;
  const [mobnav, setmobnav] = useState("flex")
  return (<>
    <div className={styles.menuicon}><HiOutlineMenuAlt3  onClick={()=>{setmobnav(mobnav==="none"?"flex":"none")}} /></div>
    <div style={{backgroundColor:acColor+"",color:bgColor,display:mobnav}} className={styles.navbar}>
      <nav>
      <div onClick={()=>{setmobnav(mobnav==="none"?"flex":"none")}} className={styles.crossicon}><span>Close</span><AiOutlineRight/></div>
        <ul>
          <Link href="/" rel="noreferrer"><li className={path==="/"?"active":""}> <GoHome />Home</li></Link>
          <Link href="/project" rel="noreferrer"><li className={path==="/project"?"active":""}><BiCodeAlt />Projects</li></Link>
          <Link href="/resume" rel="noreferrer"><li className={path==="/resume"?"active":""}><BiCertification />Resume</li></Link>
          <Link href="/contact" rel="noreferrer"><li className={path==="/contact"?"active":""}><MdConnectWithoutContact />Contact</li></Link>
          <Link href="/about" rel="noreferrer"><li className={path==="/about"?"active":""}><RiUser6Line />About</li></Link>
        </ul>
      </nav>
      <div style={{margin:"1rem"}} className='logo'>
        <Logo color={bgColor}/>
      </div>
    </div>
    </>
  )
}

export default Navbar