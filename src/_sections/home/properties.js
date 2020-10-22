import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';

const MainCont = styled.section`
  min-height: 100vh;
  //margin-top: ${props => props.noMargin ? "4rem" : "13rem"};
  @media(min-width:768px){
    padding: 4rem 0;
  }
`
const TitleCont = styled.div`
  position: relative;
  padding-top: 1rem;
`
const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
  margin: 0;
  margin-bottom: 4rem;
  //font-weight: 300;
  width: 70%;
  @media(min-width:768px){
    width: 100%;
  }
`
const TitleBorder = styled.div`
  width: 10%;
  background-color: ${props => props.theme.main.primaryColor};
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
`

export default ({ noMargin })=> {
  const state = useContext(Context).home.properties;
  return(
    <MainCont id="properties" noMargin={noMargin}>
      <Container>
        <Row>
          <Col xs={12}>
            <TitleCont>
              <TitleBorder />
              <Title>
                {state.title}
              </Title>   
            </TitleCont>              
          </Col>
          <Col xs={12}>
            <PropertyCarousel />
          </Col>
          <Col xs={12}>
            <Rectangular
              image={state.bannerImage}
              buttonText={state.buttonText}
              title={state.footer}
              icon="/icons/marker.svg"
            />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}