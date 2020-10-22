import React from 'react';
import Link from '../link';
import styled from 'styled-components';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #EBEBEB;
  height: 420px;
  transition: 250ms ease;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.108337);
  margin:0 .3rem; 
  &:hover{
    //box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.108337);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
                0px 2px 2px rgba(0, 0, 0, .12),
                0px 4px 4px rgba(0, 0, 0, .12),
                0px 8px 8px rgba(0, 0, 0, .12),
                0px 16px 16px rgba(0, 0, 0, .12),
                0px 32px 32px rgba(0, 0, 0, .12);
  }
  @media(min-width: 768px){
    margin:0;
  }
`
const CardImage = styled.div`
  position: relative;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent 35%), url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 75%;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #5A5A5A;
`
const CardTitleCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
`
const CardTitle = styled.li`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: .5rem;
`
const CardPrice = styled.li`
  color: #5A5A5A;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
`
const CardOperation = styled.span`
  font-weight: bold;
`
const CardCharacteristics = styled.ul`
  list-style: none;
  color: #5A5A5A;
  font-weight: 300;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
`
const Divider = styled.span`
  height: 1px;
  width: 100%;
  background-color: #EBEBEB;
`
const OperationCont = styled.div`
  position: absolute;
  bottom: 10px;
  left: 5px;
  color: #fff;
`

export default ({
  mainImage,
  title,
  value,
  code,
  ubication,
  characteristics,
})=> {
  return(
    <Link to="/property" title="Ver propiedad">
    <CardCont>
      <CardImage src={mainImage}>
        <OperationCont>
          <CardOperation>Venta - </CardOperation>
          <span>cod {code}</span>
        </OperationCont>
      </CardImage>
      <CardInfo>
        <CardTitleCont>
          <CardTitle>{title}</CardTitle>
          <CardPrice>UF ${value}</CardPrice>
        </CardTitleCont>
        <CardCharacteristics>
          <CharItem>{ubication.address}</CharItem>
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