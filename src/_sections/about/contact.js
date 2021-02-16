import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { navigate } from 'gatsby';

const MainCont = styled.div`
  margin: 4rem 0 0;
`

const Title = styled.p`
  margin: 0;
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`

export default ()=> {
  const state = useContext(Context);
  return(

      <MainCont>
        <Row align="center">
          <Col xs={9}>
            <Title>
              ¿Necesitas asesoría en la compra, venta o arriendo de una propiedad? Cuenta con un servicio profesional.
            </Title>
          </Col>
          <Col xs={3}>
            <Button block primary onClick={()=> navigate("/contact")}>
              Contáctanos
            </Button>
          </Col>
        </Row>
      </MainCont>

  )
}