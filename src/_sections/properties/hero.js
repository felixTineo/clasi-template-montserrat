  import React, { useContext, useState, Fragment } from 'react';
  import styled from 'styled-components';
  import Context from '../../_context';
  import { Container, Row, Col, Hidden } from 'react-grid-system';
  import { SearchForm, FilterForm } from '../../_components/forms';
  import { DownOutlined, UpOutlined } from '@ant-design/icons';
  import RateBar from '../../_layout/header/rate-bar';


  const MainCont = styled.div`
    height: calc(100vh - 8rem);
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media(min-width: 576px){
      min-height: calc(100vh - 87px);
      margin-top: 0;
    }
    ::before{
      content: " ";
      position: absolute;
      bottom: 0;
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
    justify-content: center;
    height: calc(100vh - 8rem);
    @media(min-width: 576px){
      min-height: calc(100vh - 87px);
      margin-top: 0;
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
    bottom: -30vh;
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
    const [filter, setFilter] = useState(false);
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
              <SearchForm />
              <MoreButton onClick={()=> setFilter(!filter)}>
                {
                  filter
                  ?(
                    <Fragment>
                      Menos filtros
                      <UpOutlined style={{ marginLeft: 8 }} />        
                    </Fragment>
                  )
                  :(
                    <Fragment>
                      Más filtros
                      <DownOutlined style={{ marginLeft: 8 }} />              
                    </Fragment>              
                  )
                }
              </MoreButton>
              {
                filter && (
                  <FilterForm shadow/>
                )
              }              
            </FormContainer>
            </Container>
          </ButtonContainer>
        </MainCont>
      </Fragment>
    )
  }