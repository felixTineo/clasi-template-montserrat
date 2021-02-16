import React, { useReducer, useCallback, useEffect } from 'react';
import Layout from '../_layout';
import Hero from '../_sections/property/hero';
import PropertyUser from '../_sections/property/property-user';
import Ubication from '../_sections/property/ubication';
import Properties from '../_sections/home/properties';
import { Row, Col, Container, Visible } from 'react-grid-system';
import Contact from '../_sections/property/property-user/user';
import Interaction from '../_sections/property/interaction-buttons';
import styled from 'styled-components';
import { useQueryParam } from 'gatsby-query-params';
import { urlBuilder } from '../_util';
import { LoadingOutlined, FrownOutlined } from '@ant-design/icons';
import { graphql } from 'gatsby';

const StandCont = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.loading && props.theme.main.primaryColor};
`

export default ({ data })=>{
  const propertyId = useQueryParam('propertyId');
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }),{
    loading: true,
    error: false,
    dataQuery: null,
  });

  const getProperty = useCallback(async()=> {
    try{
      const url = urlBuilder('https://api.clasihome.com/rest/properties', { propertyId });
      const data = await fetch(url);
      const result = await data.json();
      console.log("PROPETY URL", url);
      console.log("#PROPERTY DATA", result);
      setQuery({ loading: false, dataQuery: result });
    }catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[propertyId]);

  useEffect(()=>{
    if(propertyId){
      getProperty();
    }
  },[propertyId])

  const { dataQuery, loading, error } = query;

  if(loading) return (
    <Layout data={JSON.parse(data.initial.data)}>
      <StandCont loading>
        <LoadingOutlined />
        <p>Cargando...</p>
      </StandCont>
    </Layout>
  )
  if(error) return (
    <Layout data={JSON.parse(data.initial.data)}>
      <StandCont>
        <FrownOutlined />
        <p>Error de conexión</p>
      </StandCont>
    </Layout>
  );

  return(
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero state={dataQuery} />
      <PropertyUser state={dataQuery} />
      <Ubication coordinates={dataQuery.ubication.location.coordinates}/>
      <Properties noMargin />
      <Visible xs>
        <Container>
          <Row>
            <Col xs={12}>
              <Contact description={dataQuery} />
            </Col>
          </Row>
        </Container>
      </Visible>
    </Layout>
  )
}

export const query = graphql`
query{
  initial{
    data
  }
}
`