import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    width: 100%;
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    margin-bottom:0;
  }  
`

export default ({ block, shadow })=> {

  return(
    <Form onSubmit={(e) => e.preventDefault()} block={block} shadow={shadow}>
      <Row>
        <Col xs={12} md={2}>
          <Input gray placeholder="Desde" />
        </Col>
        <Col xs={12} md={2}>
          <Input gray placeholder="Hasta" />
        </Col>
        <Col xs={12} md={2}>
          <Select
            default="Dormitorios"
            options={["opcion 1", "opcion 2", "opcion 3"]}
            gray
          />
        </Col>    
        <Col xs={12} md={2}>
          <Select
            default="Baños"
            options={["opcion 1", "opcion 2", "opcion 3"]}
            gray
          />
        </Col>    
        <Col xs={12} md={2}>
          <Select
            default="Divisas"
            options={["opcion 1", "opcion 2", "opcion 3"]}
            gray
          />
        </Col>                
        <Col xs={12} md={2}>
          <Hidden xs>
            <Button primary block>
              Aplicar filtros
            </Button>
          </Hidden>
          <Visible xs>
            <Button primary block>
              <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
              Buscar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
  )
}