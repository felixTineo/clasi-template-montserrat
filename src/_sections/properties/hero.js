  import React, { useContext, useState, Fragment } from 'react';
  import styled from 'styled-components';
  import Context from '../../_context';
  import { Container, Row, Col, Hidden } from 'react-grid-system';
  import { SearchForm, FilterForm } from '../../_components/forms';
  import { DownOutlined, UpOutlined } from '@ant-design/icons';
  import RateBar from '../../_layout/header/rate-bar';


  const MainCont = styled.div`
    height: calc(100vh - 8rem);
    margin-top: 137.52px;
    margin-bottom: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media(min-width: 576px){
      min-height: calc(100vh - 87px);
      margin-top: 0;
      margin-bottom: 4rem;
    }
    ::before{
      content: " ";
      position: absolute;
      bottom: 10%;
      right: 0;
      width: 90%;
      max-width: 975px;
      height: 60%;
      background-image: url(${props => props.theme.home.hero.background});
      background-size: cover;
      background-position: center;
      opacity: 1;
      @media(min-width: 576px){
        min-height: calc(100vh - 87px);
        opacity: 1;
        width: 60%;
        height: 100%;
        top: 0;
        bottom: 0;
      }
    }
  `
  const FormContainer = styled.div`
    position: relative;
    padding: 2rem 2rem 0 0;
    background: #fff;
    min-height: 250px;
  `
  const TitleCont = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5rem;
    height: calc(100vh - 8rem);
    @media(min-width: 576px){
      min-height: calc(100vh - 87px);
      margin-top: 0;
      justify-content: center;
    }    
  `
  const Title = styled.h1`
    position: relative;
    z-index: 5;
    //margin-top: 8rem;
    user-select: none;
    @media(min-width: 576px){
      width: 30%;
    }
  `
  const ButtonContainer = styled.div`
    position: absolute;
    bottom: -5vh;
    left: 0;
    width: 100%;
    z-index: 1000;
    @media(min-width: 576px){
      bottom: -20vh;
    }
  `
  const MoreButton = styled.button`
  margin: 2rem 0;
  border: none;
  background: transparent;
  color: ${props => props.theme.main.primaryColor};
  transition: 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    filter: saturate(5.5);
  }
`

  export default ()=> {
    const state = useContext(Context);
    return(
      <Fragment>
        <MainCont>
          <Container style={{ width: "100%" }}>
            <TitleCont>
              <Title className="animate__animated animate__fadeInDown">
                Propiedades
              </Title>        
              <Hidden xs>
                <RateBar className="animate__animated animate__fadeInDown" />
              </Hidden>
            </TitleCont>
          </Container>
          <ButtonContainer>
            <Container>
            <FormContainer className="animate__animated animate__fadeInUp">
              <SearchForm noHome />          
            </FormContainer>
            </Container>
          </ButtonContainer>
        </MainCont>
      </Fragment>
    )
  }