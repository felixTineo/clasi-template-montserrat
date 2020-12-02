import React, { useContext } from 'react';
import context from '../../_context';
import Link from '../link';
import styled from 'styled-components';
import { truncate, FormatCurrency } from '../../_util';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
  transition: 250ms ease;
  margin:0 .3rem; 
  border: 3px solid #fff;
  &:hover{
    border-color: ${props => props.theme.main.primaryColor};
  }
  @media(min-width: 768px){
    margin:0;
  }
`
const CardImage = styled.div`
  position: relative;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent 35%), url("${props => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 75%;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #5A5A5A;
  padding-left: 1rem;
`
const CardTitleCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
`
const CardTitle = styled.li`
  font-weight: bold;
  color: #2a2a2a;
  font-size: 1.2rem;
  margin-bottom: .5rem;
`
const CardPrice = styled.li`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
`
const CardOperation = styled.span`
  color: #686868;
`
const CardCharacteristics = styled.ul`
  list-style: none;
  color: #2a2a2a;
  font-weight: 300;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
`
const OperationCont = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #fff;
  padding-top: 2rem;
  min-width: 80%;
  overflow: hidden;
  color: #686868;
  max-width: 100px;
  padding-left: 1rem;
`

export default ({
  mainImage,
  title,
  value,
  code,
  ubication,
  characteristics,
  _id,
})=> {
  const builderId = useContext(context).builderId;
  return(
    <Link to={`/property?builderId=${builderId}&propertyId=${_id}`} title="Ver propiedad">
    <CardCont>
      <CardImage src={mainImage}>
        <OperationCont>
          <CardTitleCont>
            <CardTitle>{truncate(title, 20)}</CardTitle>
          </CardTitleCont>
          <CardOperation>Venta - </CardOperation>
          <span>cod {code}</span>
        </OperationCont>
      </CardImage>
      <CardInfo>
        <CardTitleCont>
          <CardPrice>UF ${value}</CardPrice>
        </CardTitleCont>
        <CardCharacteristics>
          <CharItem>{truncate(ubication.address, 50)}</CharItem>
          {
            characteristics.slice(0, 2).map((char, index) => (
              <CharItem key={index}>
                <span>{char.name} {char.value} {char.name === "Sup. Total" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
      </CardInfo>
    </CardCont>
    </Link>
  )
}