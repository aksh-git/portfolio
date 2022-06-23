import Navbar from '../components/Navbar'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar"
import React from 'react';
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  let darkTheme = {
    bgColor : "#1f1f1f",
    fgColor : "#f1f1f1",
    acColor : "#b2b2b2"
  }
  let lightTheme = {
    fgColor : "#1f1f1f",
    bgColor : "#f1f1f1",
    acColor : "#6b6b6b"
  }  
  
  const [ptheme, setptheme] = useState(lightTheme)

  return (<>
    <NextNProgress color={lightTheme.acColor} />
    <Navbar theme={ptheme} />
    <div id="mainSection" className="mainSection">
      <Component theme={ptheme} {...pageProps} />
    </div>
  </>)
}

export default MyApp
