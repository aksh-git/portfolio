import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'
import { SiHey } from 'react-icons/si'
import { MdWifiTethering } from 'react-icons/md'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

export default function Home(props) {

  let { bgColor, fgColor , acColor } = props.theme;

  return (
    <div  className={styles.container}>
      <Head>
        <title>Akash Yadav | Full stack developer</title>
        <meta name="keywords" content="portfolio, full, stack, web, developer, akash yadav"></meta>
        <meta name="description" content="Hey there!! i'm Akash Yadav, A passionate fullstack developer from India. check out my profile here.." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey there!! <SiHey /> 
        </h1>
        <p className={`${styles.headp} bolder`}>
          I&#39;m Akash Yadav, A passionate fullstack developer from India.
        </p>
        <p style={{color:acColor}} className={styles.decp}>
        Welcomes you!! i am a full stack web developer, i like computers, you know how these are changing lives of billions of people&#39;s & i&#39;m also one of them. i love to code, this place is to represent my presence here on this online world. Have a look on my work if you got some time.<br/><br/>
        <strong>Thank you.. for visiting... Have a nice day!!</strong>
        </p>
        <div tyle={{borderColor:acColor}} className={styles.separator}></div>
        <section className={styles.skills}>
        <div className='badge'><FaGreaterThan /><span className='inner'>Technologies <span>i works with</span></span></div>
        <p align="left">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
          <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
          <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a>
          <a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a>
          <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/django-colored.svg" width="36" height="36" alt="Django" /></a>
          <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/photoshop-colored.svg" width="36" height="36" alt="Photoshop" /></a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
        </p>
        </section>
        <div tyle={{borderColor:acColor}} className={styles.separator}></div>
        <section className={styles.social}>
        <div className='badge'><MdWifiTethering /> <span className='inner'>Connect <span>with-me</span></span></div>
          <p align="left"> 
          <a href="https://www.github.com/aksh-git" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/github.svg" width="30" height="30" /></a> 
          <a href="http://www.instagram.com/ig_akash369" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/instagram.svg" width="30" height="30" /></a> 
          <a href="https://www.linkedin.com/in/akash-yadav-36aa56230/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="30" height="30" /></a>
          <a href="https://www.twitter.com/akash_369_" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/twitter.svg" width="30" height="30" /></a>
          </p>
        </section>
      </main>

      <footer style={{borderColor:acColor}} className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️️ by{' '}
          <span className={styles.logo}>
            <Logo color={fgColor}/>
          </span>
        </a>
      </footer>
    </div>
  )
}
