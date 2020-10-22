import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Hidden, Container, Visible } from 'react-grid-system';
import RateBar from './rate-bar';
import NavDesktop from './nav-desktop';
import NavMovil from './nav-movil';

const MainCont = styled.header`
  color: #fff;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1500;
  @media(min-width: 768px){
    position: relative;
    //background-color: transparent;
  }
`

export default ()=> {

  return(
    <Fragment>
      <Hidden xs>
        <MainCont>
          <Container>
            <NavDesktop />
          </Container>
        </MainCont>
      </Hidden>
      <Visible xs>
        <MainCont>
          <Container>
            <NavMovil />
          </Container>
        </MainCont>
      </Visible>
    </Fragment>
  )
}