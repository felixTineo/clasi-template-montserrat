import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  padding: 6rem 0;
  //min-height: 100vh;
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
`
const Description = styled.div`

`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <HistoryCont>
              <Title>
                {state.history.title}
              </Title>
              <Description dangerouslySetInnerHTML={{__html: state.history.description}} />
            </HistoryCont>
          </Col>
          <Col xs={12} md={6}>
            <Image src="/history-image.jpg" alt="historia" />
          </Col>                    
        </Row>
      </Container>
    </MainCont>
  )
}