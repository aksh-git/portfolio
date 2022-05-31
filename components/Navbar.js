import { useRouter } from 'next/router';
import { GoHome } from 'react-icons/go';
import { BiCodeAlt } from 'react-icons/bi';
import { GrCertificate } from 'react-icons/gr';
import { RiUser6Line } from 'react-icons/ri';
import { MdConnectWithoutContact } from 'react-icons/md';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from './logo';
import Link from 'next/Link';

function Navbar(props) {

  let { bgColor, fgColor , acColor } = props.theme;
  
  const router = useRouter()
  let path = router.pathname;

  return (
    <div style={{backgroundColor:acColor+"b3"}} className={styles.navbar}>
      <nav >
        <ul>
          <Link href="/" rel="noreferrer"><li className={path==="/"?"active":""}> <GoHome />Home</li></Link>
          <Link href="/project" rel="noreferrer"><li className={path==="/project"?"active":""}><BiCodeAlt />Projects</li></Link>
          <Link href="/resume" rel="noreferrer"><li className={path==="/resume"?"active":""}><GrCertificate />Resume</li></Link>
          <Link href="/contact" rel="noreferrer"><li className={path==="/contact"?"active":""}><MdConnectWithoutContact />Contact</li></Link>
          <Link href="/about" rel="noreferrer"><li className={path==="/about"?"active":""}><RiUser6Line />About</li></Link>
        </ul>
      </nav>
      <div style={{margin:"1rem"}} >
        {/*theme toggle button*/}
      </div>
      <div style={{margin:"1rem"}} className='logo'>
        <Logo color={bgColor}/>
      </div>
    </div>
  )
}

export default Navbar