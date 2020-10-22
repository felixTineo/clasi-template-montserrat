import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.div`
  padding-top:2rem;
  @media(min-width: 768px){
    padding: 2rem 0 4rem;
  }
`

const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  margin-bottom: 4rem;
`
const Map = styled.img`
  border: 1px solid #dadada;
`

export default ()=> {

  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Ubicación</Title>
          </Col>
          <Col xs={12}>
            <Map src="/big-map.png" alt="ubication" />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}