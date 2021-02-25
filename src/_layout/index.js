import React, { useEffect } from 'react';
import Context from '../_context';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import { useLayout } from '../_hooks';
import LoaderScreen from '../_components/LoaderScreen';
import { Helmet } from "react-helmet";
import 'animate.css'

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`

export default ({ children, data })=> {
  
  useEffect(()=>{
    (function(){var ldk=document.createElement('script'); ldk.type='text/javascript'; ldk.async=true; ldk.src='https://s.cliengo.com/weboptimizer/6036c5b6321d09002a441e8d/6037d71c5eaf5e002a8ac96b.js?platform=onboarding_modular_mail_webmaster'; var s=document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s);})();    
  },[]);

  return(
    <Context.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Encuentra aquí, tu lugar favorito" />
            <title>Oro | Propiedad</title>
            <link rel="canonical" href="" />
            <meta name="og:url" content="" />
            <meta name="og:title" content="Oro | Propiedad" />
            <meta name="og:description" content="Encuentra aquí, tu lugar favorito" />
            {/*<meta name="og:image" content="http://propiedadesmyc.cl/logo.png" />*/}
            <meta name="og:type" content="website" />          
          </Helmet>             
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}