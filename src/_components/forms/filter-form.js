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
    //padding-left: 5px;
    background-color: #fff;
    margin-bottom:0;
  }  
`

export default ({ block, shadow, values, onChange, onSubmit })=> {

  return(
    <Form onSubmit={(e)=> { e.preventDefault(); onSubmit(); }}>
      <Row gutterWidth={8}>
        <Col xs={12} md={2}>
          <Input
            gray
            placeholder="Precio desde"
            id="priceMin"
            value={values.priceMin}
            onChange={onChange}
          />
        </Col>
        <Col xs={12} md={2}>
          <Input
            gray
            placeholder="Precio hasta"
            id="priceMax"
            value={values.priceMax}
            onChange={onChange}
          />
        </Col>
        <Col xs={12} md={2}>
          <Input
            gray
            placeholder="Superficie desde"
            id="totalAreaTo"
            value={values.totalAreaTo}
            onChange={onChange}
          />
        </Col>    
        <Col xs={12} md={2}>
          <Input
            gray
            placeholder="Superficie hasta"
            id="totalAreaFrom"
            value={values.totalAreaFrom}
            onChange={onChange}
          />
        </Col>    
        <Col xs={12} md={2}>
          <Select
            default="Moneda"
            options={["CLP", "UF"]}
            gray
            id="currency"
            value={values.currency}
            onChange={onChange}
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