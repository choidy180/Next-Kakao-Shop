import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from '../styles/theme';
import MenuOver from '../components/MenuOverlay';
import { useEffect, useState } from 'react';
import { authService } from '../firebase/firebase';

function MyApp({ Component, pageProps }) {
  const [init, setInit] = useState<Boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    })
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next-basics | Next</title>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <MenuOver {...isLoggedIn} {...userObj}/>
        <Component {...pageProps} {...isLoggedIn} {...userObj}/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
