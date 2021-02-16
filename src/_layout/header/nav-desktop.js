import React, { Fragment, useContext } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { LinkButton as Button } from '../../_components/buttons';
import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
  margin-left: 4rem;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: #212121;;
  transition: 250ms ease;
  text-decoration: none !important;
  font-weight: bold;
  &:hover{
    color: ${props => props.theme.main.primaryColor};;
  }
  &:visited{
    color: rgba(255, 255, 255, .6);
  }
`
const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
  transition: 250ms ease;
  /*${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }*/
`
const LoginButton = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #b79c4e;
  border-color: ${props => props.theme.main.primaryColor};
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.main.primaryColor};
  text-decoration: none;
  border-radius: 3px;
  cursor: pointer;
  &:visited{
    color: ${props => props.theme.main.primaryColor};
  }  
  &:hover{
    background-color: ${props => props.theme.main.primaryColor};;
    color: #fff;
  }
`

export default ()=> {
  const state = useContext(context)
  return(
    <Fragment>
      <RateBar />
      <MainCont>
        <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <NavBar>
          <NavItem noMargin>
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
  {/*        <NavItem>
            <Link to="/news">
              <NavLink>
                Noticias
              </NavLink>
            </Link>
  </NavItem>*/}
          <NavItem>
            <Link to={`/contact`}>
              <NavLink>
                Contacto
              </NavLink>
            </Link>
          </NavItem>                          
        </NavBar>
        </div>
        <LoginButton
          href={`http://app.clasihome.com/login?logo=${state.main.logo.value}&primaryColor=${state.main.primaryColor.substring(1)}`}
        >
          Login
        </LoginButton>
    </MainCont>
  </Fragment>
  )
}