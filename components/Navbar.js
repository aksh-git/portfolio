import { useRouter } from 'next/router';
import { GoHome } from 'react-icons/go';
import { BiCodeAlt, BiCertification } from 'react-icons/bi';
import { RiUser6Line } from 'react-icons/ri';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';
import React, { useEffect,useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from './Logo';
import Link from 'next/link';


function Navbar(props) {

  let { bgColor, fgColor , acColor } = props.theme;
  const router = useRouter()

  const [path, setpath] = useState(router.pathname)
  useEffect(() => {
    if(router.isReady){
      setpath(router.pathname)
    }
  }, [router])
  
  const [mobnav, setmobnav] = useState("-100vw");
  function closmobnav(){
    setmobnav("-100vw")
  }
  return (<>
    <div className={styles.menuicon}><HiOutlineMenuAlt3 onClick={()=>{setmobnav(mobnav==="0"?"-100vw":"0")}} /></div>
    <div style={{backgroundColor:acColor+"56",color:acColor}} className={styles.navbar}>
      <nav>
        <ul>
          <Link href="/" rel="noreferrer"><li className={path==="/"?"active":""}> <GoHome />Home</li></Link>
          <Link href="/Project" rel="noreferrer"><li className={path==="/project"?"active":""}><BiCodeAlt />Projects</li></Link>
          <Link href="/resume" rel="noreferrer"><li className={path==="/resume"?"active":""}><BiCertification />Resume</li></Link>
          <Link href="/Contact" rel="noreferrer"><li className={path==="/contact"?"active":""}><MdConnectWithoutContact />Contact</li></Link>
          {/*<Link href="/about" rel="noreferrer"><li className={path==="/about"?"active":""}><RiUser6Line />About</li></Link>*/}
        </ul>
      </nav>
      <div style={{margin:"1rem"}} className='logo'>
        <Logo color={acColor}/>
      </div>
    </div>
    <div style={{backgroundColor:acColor+"",color:bgColor,right:mobnav}} className={`${styles.navbar} ${styles.mobnav}`}>
      <nav>
      <div onClick={()=>{setmobnav(mobnav==="0"?"-100vw":"0")}} className={styles.crossicon}><span>Close</span><AiOutlineRight/></div>
        <ul>
          <Link href="/" rel="noreferrer"><li onClick={()=>{closmobnav()}} className={path==="/"?"active":""}> <GoHome />Home</li></Link>
          <Link href="/Project" rel="noreferrer"><li onClick={()=>{closmobnav()}} className={path==="/project"?"active":""}><BiCodeAlt />Projects</li></Link>
          <Link href="/resume" rel="noreferrer"><li onClick={()=>{closmobnav()}} className={path==="/resume"?"active":""}><BiCertification />Resume</li></Link>
          <Link href="/Contact" rel="noreferrer"><li onClick={()=>{closmobnav()}} className={path==="/contact"?"active":""}><MdConnectWithoutContact />Contact</li></Link>
          {/*<Link href="/about" rel="noreferrer"><li onClick={()=>{closmobnav()}} className={path==="/about"?"active":""}><RiUser6Line />About</li></Link>*/}
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