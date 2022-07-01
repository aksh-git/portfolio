import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Logo from '../components/Logo'
import { ImMail4 } from 'react-icons/im'
import Loder from '../components/Loder'

function Contact(props) {
  const host = "http://localhost:3000";
  const { bgColor, fgColor , acColor } = props.theme;
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(0)
  const [cname, setcname] = useState("")
  const [cmail, setcmail] = useState("")
  const [cmessage, setcmessage] = useState("")
  const [csubject, setcsubject] = useState("")
  
  function clearinputs(){
    setcname("");
    setcmail("");
    setcmessage("");
    setcsubject("");
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleInputName = (e)=>{
    var data = e.target.value;
    var letters = /^[a-zA-Z\s]*$/;
    if(data.match(letters)){
      setcname(data);
    }
  }
  const handleInputMail = (e)=>{
    var data = e.target.value;
    setcmail(data);
  }
  const handleInputSubject = (e)=>{
    var data = e.target.value;
    setcsubject(data);
  }
  const handleInputMessage = (e)=>{
    var data = e.target.value;
    setcmessage(data);
  }

  const handleSubmitForm = async ()=>{
    setloading(1);
    if(!validateEmail(cmail)){
      seterror("Please provide correct email address, so we can easily communicate easily.")
    }else{
      if(cname.trim().length<5){
        seterror("Your name is too short, kindly provide your full name.")
      }else{
        if(csubject.trim().length<5){
          seterror("Kindly prove a subject i.e. purpose of contact.")
        }else{
          if(cmessage.trim().length<10){
            seterror("Yout message is too short.")
          }else{
            seterror("");
            //API CALL
            try {
              const response = await fetch(`${host}/api/sendMail`,{
                method:'POST',
                headers: {
                 "Accept": "*/*",
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({cmail:cmail,csubject:csubject,cname:cname,cbody:cmessage})
              });
              console.log(response);
              const result = await response.json();
              if(result.success){
                alert("Message sent successfully.")
                setloading(0);
                clearinputs();
              }else{
                seterror(result.message);
                setloading(0);
              }
            } catch (error) {
              setloading(0);
            }
          }
        }
      }
    }
  }

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
            <span className='inner'>Quick 
              <span> Connect.</span>
            </span>
            {loading===1 && <div className={styles.loder}>
              <Loder />
            </div>}
          </div>
          <div className={styles.emailContainer}>
            {error.length>2 && 
              <div className={styles.errorTv}>
              <span>{error}</span>
              </div>}
            <form method='POST' onSubmit={(e)=>(e.preventDefault(), handleSubmitForm())}>
              <input value={cname} onChange={handleInputName} type="text" placeholder='Your Name' required/>
              <input value={csubject} onChange={handleInputSubject} maxLength={20} type="text" placeholder='Subject' required/>
              <input value={cmail} onChange={handleInputMail} type="email" placeholder='your_name@email.com' required/>
              <textarea value={cmessage} onChange={handleInputMessage} rows="4" placeholder='Please write your message here...' maxLength={500} line="4" required></textarea>
              <div className={styles.formsbtn}>
                <button className={styles.send}>Send</button>
              </div>
            </form>
          </div>
          <div className={styles.emailstatus}>

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

export default Contact