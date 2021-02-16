  import React, { useContext } from 'react';
  import styled from 'styled-components';
  import Context from '../../_context';
  import { Container } from 'react-grid-system';
  import { SearchForm } from '../../_components/forms';


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
    padding: 2rem;
    padding-left: 0;
    background: #fff;
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
      bottom: -4vh;
    }
  `

  export default ()=> {
    const state = useContext(Context);

    return(
      <MainCont>
        <Container style={{ width: "100%" }}>
            <Title className="animate__animated animate__fadeInDown">
              {state.home.hero.title}
            </Title>        
        </Container>
        <ButtonContainer>
          <Container>
          <FormContainer className="animate__animated animate__fadeInUp">
            <SearchForm />
          </FormContainer>
          </Container>
        </ButtonContainer>
      </MainCont>
    )
  }