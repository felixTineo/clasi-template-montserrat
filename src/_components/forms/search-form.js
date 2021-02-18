import React, { useState, Fragment, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row, } from 'react-grid-system';
import { Select, Input, Autocomplete } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useNavigateForm } from '../../_hooks';
import { getSearchParams } from 'gatsby-query-params';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import FilterForm from './filter-form';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const Form = styled.form`

`

const OptionsCont = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 2rem;
`

const Option = styled.li`
  margin-left: ${props => props.last ? "1rem" : 0};
`

const OptionButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => props.active ? "#fff" : "rgba(255, 255, 255, .5)"};
  border-bottom: ${props => props.active ? "1px solid #fff" : "none"};
  transition: 250ms ease;
  font-size: 1rem;
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-left: 1rem;
  ${Button}:hover & {
    
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

export default ({ noHome })=> {
  const [byCode, setByCode] = useState(false);
  const [filter, setFilter] = useState(false);
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: 'CLP',
  });
  const params = getSearchParams();
  
  useEffect(()=>{
    if(params){
      setInitial({...params, stringSearch: ''});
    }
    if(byCode){
      setInitial({
        propertyType: '',
        operation: '',
        commune: '',
        stringSearch: '',
        priceMin: '',
        priceMax: '',
        totalAreaTo: '',
        totalAreaFrom: '',
        bedrooms: '',
        bathrooms: '',
        currency: 'CLP',
      })
    }
  },[params, byCode]);

  const onChangeByCode = useCallback(e => {
    if(e.target.value === "Código"){
      setByCode(true);
    } else {
      setByCode(false);
    }
  });
  
  return(
    <Fragment>
    <Form onSubmit={(e)=> { e.preventDefault(); onFinish(); }}>
      <Row gutterWidth={8}>
        <Col xs={12} md={2}>
          <Select
            //defaultChecked="Propiedad"
            default="Buscar por"
            value={ byCode ? "Código" : "Propiedad" }
            onChange={onChangeByCode}
            options={["Propiedad", "Código"]}
            gray
            vertical
          />          
        </Col>        
        {
          byCode
          ?(
            <Col xs={12} md={8}>
              <Autocomplete
                id="stringSearch"
                onSelect={onChange}
                selected={values.commune}
                placeholder="Ingrese el código de la propiedad"
              />
            </Col>              
          )
          :(
            <Fragment>
              <Col xs={12} md={2}>
                <Select
                  id="propertyType"
                  onChange={onChange}
                  value={values.propertyType}
                  default="Propiedad"
                  options={PROPERTY_TYPE}
                  gray
                  capitalize
                />     
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="operation"
                  onChange={onChange}        
                  value={values.operation}          
                  default="Operación"
                  options={["VENTA", "ARRIENDO"]}
                  gray
                  capitalize
                />
              </Col>
              <Col xs={12} md={4}>
                <Autocomplete
                  id="commune"
                  onSelect={onChange}
                  selected={values.commune}
                  options={COMMUNES.map(val => val.name)}
                  placeholder="Comuna"
                  gray
                />
              </Col>              
            </Fragment>
          )
        }
        <Col xs={12} md={2}>
          <Button block primary type="submit">
            Buscar
            <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" cliRule="evenodd" d="M11.3749 5.68752C11.3749 6.94027 10.9629 8.09586 10.2739 9.03665L14 12.7627L12.7627 14L9.03671 10.274C8.09592 10.9629 6.94023 11.375 5.68749 11.375C2.55152 11.375 0 8.82351 0 5.68752C0 2.55153 2.55149 0 5.68746 0C8.82343 0 11.3749 2.55153 11.3749 5.68752ZM1.75001 5.68752C1.75001 7.8588 3.51623 9.62503 5.68749 9.62503C7.85872 9.62503 9.62497 7.8588 9.62497 5.68752C9.62497 3.51625 7.85875 1.75002 5.68749 1.75002C3.51623 1.75002 1.75001 3.51625 1.75001 5.68752Z"/>
            </SvgCont>
          </Button>
        </Col>                        
      </Row>
    </Form>
    { noHome && (
      <MoreButton type="button" onClick={()=> setFilter(!filter)}>
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
    )}
    {
      filter && (
        <FilterForm values={values} onChange={onChange} onSubmit={onFinish} />
      )
    }
    </Fragment>
  )
}