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
  height: 470px;
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
  overflow: hidden;
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
  font-size: 1rem;
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
  text-transform: capitalize;
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
  padding: 0 1rem;
  padding-top: 1rem;
  min-width: 80%;
  overflow: hidden;
  color: #686868;
  max-width: 100px;
`
const Status = styled.p`
  margin: 0;
  position: absolute; 
  top: 2rem;
  left: -5rem;
  background-color: ${props => props.theme.main.primaryColor};
  padding: .3rem 5rem;
  font-size: .8rem;
  transform: rotate(-45deg);
`

export default ({
  mainImage,
  title,
  value,
  currency,
  code,
  ubication,
  characteristics,
  _id,
  operation,
  status,
})=> {
  const builderId = useContext(context).builderId;
  return(
    <Link to={`/property?propertyId=${_id}`} title="Ver propiedad">
    <CardCont>
      <CardImage src={mainImage}>
        {
          status === "ARRENDADA" && (
            <Status>
            {status}
          </Status>            
          ) 
          || status === "VENDIDA" &&(
            <Status>
            {status}
          </Status>            
          )
        }
        <OperationCont>
          <CardTitleCont>
            <CardTitle>{truncate(title, 50)}</CardTitle>
          </CardTitleCont>
          <CardOperation>{operation.toLowerCase()} - </CardOperation>
          <span>cod {code}</span>
          <br/>
        </OperationCont>
      </CardImage>
      <CardInfo>
        <CardTitleCont>
          <CardPrice>{`${currency} ${FormatCurrency(currency, value)}`}</CardPrice>
        </CardTitleCont>
        <CardCharacteristics>
          <CharItem>{truncate(ubication.commune, 50)}</CharItem>
          {
            characteristics.filter(char => (
              char.name === "Superficie total" ||
              char.name === "Superficie útil" ||
              char.name === "Habitaciones" ||
              char.name === "Baños" ||
              char.name === "Estacionamientos"

            ) ).map((char, index) => (
              <CharItem key={index}>
                {/*
                  char.name === "Superficie total" && <img src="/icons/surface.svg" /> ||
                  char.name === "Superficie útil" && <img src="/icons/surface.svg" />  ||
                  char.name === "Habitaciones" && <img src="/icons/rooms.svg" /> ||
                  char.name === "Baños" && <img src="/icons/bath.svg" />
                */}
                <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
      </CardInfo>
    </CardCont>
    </Link>
  )
}