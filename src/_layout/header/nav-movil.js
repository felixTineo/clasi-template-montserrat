import React, { useState, useEffect, useContext } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { gsap } from 'gsap';
import { Button, Responsive as ButtonResponsive } from '../../_components/buttons';
import RateBar from './rate-bar';
import { Container } from 'react-grid-system';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #333;
`
const NavContainer = styled.div`
  padding: 4rem 0;
  position: absolute;
  top: 0;
  left: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  background-color: #333;
`
const NavBar = styled.ul`
  text-align: center;
`
const NavItem = styled.li`
  margin-bottom: ${props => props.noMargin ? 0 : "1rem"};
  //text-align: left;
  font-size: 2rem;
  a{
    color: ${props => props.theme.main.primaryColor};
  }
`
const NavLink = styled.span`
  color: ${props => props.theme.main.primaryColor};
  transition: 250ms ease;
  text-decoration: none;
  font-weight: bold;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
  &:visited{
    color: #fff;
    text-decoration: underline;
  }
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: #fff;
  }
`
const SocialCont = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.main.primaryColor};
`
const SocialItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : '1rem'};
`
const SvgIcon = styled.span`
  color: ${props =>props.theme.main.primaryColor};
  font-size: 2rem;
  margin-right: .5rem;
`
const LogoCont = styled.div`
  position: relative;
  z-index: 100;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100px;
`

export default ()=> {
  const [visibleNav, setVisibleNav] = useState(false);
  const builderId = useContext(context).builderId;
  const office = useContext(context).office;

  useEffect(()=> {
    if(visibleNav){
      gsap.to("#nav-movil", { duration: .25, left: 0 });
    } else {
      gsap.to("#nav-movil", { duration: .25, left: "100vw" });
    }
  },[visibleNav]);

  return(
    <MainCont>
      <LogoCont>
        <Logo/>
      </LogoCont>
      <ButtonResponsive
        visible={visibleNav}
        onClick={() => setVisibleNav(!visibleNav)}
      />
      <NavContainer id="nav-movil">
        <RateBar />
        <NavBar>
          <Container>
          <NavItem>
            <Link to={`/about`}>
              <NavLink>
                Nosotros
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`/properties`}>
              <NavLink>
                Propiedades
              </NavLink>
            </Link>
          </NavItem>
{/*          <NavItem>
            <Link to="/news">
              <NavLink>
                Noticias
              </NavLink>
            </Link>
</NavItem>*/}
          <NavItem>
            <Link to={`/contact`}>
              <NavLink noMargin>
                Contacto
              </NavLink>
            </Link>
          </NavItem>
          </Container>
        </NavBar>    
        <Container style={{ width: "100%" }}>
          <Button block primary>
            <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
            </SvgCont>
            Consultas
          </Button>  
        </Container>          
        <Container style={{ width: "100%" }}>
        <SocialCont>
          <SocialItem>
            <NavLink href={office.facebook} rel="noopener" target="_blank">
              <SvgIcon>
                <FacebookFilled />
              </SvgIcon>
            </NavLink>
          </SocialItem>
          <SocialItem>
            <NavLink href={office.instagram} rel="noopener" target="_blank">
              <SvgIcon>
                <InstagramFilled />
              </SvgIcon>
            </NavLink>
          </SocialItem>          
          <SocialItem>
            <NavLink href={office.twitter} rel="noopener" target="_blank">
              <SvgIcon>
                <LinkedinFilled />
              </SvgIcon>
            </NavLink>
          </SocialItem>                    
        </SocialCont>
        </Container>
      </NavContainer>
    </MainCont>
  )
}