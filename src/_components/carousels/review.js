import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const RevieweCont = styled.div`
  position: relative;
  padding: 2rem;
  //background-color: ${props => props.theme.main.primaryColor};
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 350px;
  @media(min-width: 768px){
    flex-direction: row;
    min-height: 50vh;
    align-items: center;
    justify-content: space-around;
  }
`
const ReviewInnerCont = styled.div`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ReviewAuthor = styled.p`
  font-weight: bold;
  text-align: left;
`
const ReviewDescription = styled.p`
  text-align: left;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const DotsCont = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: center;
`
const QuotationCont = styled.div`
  position: absolute;
  top: -2rem;
  left: 4rem;
`

const StyledDot = styled(Dot)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: none;
  transition: 250ms ease;
  background-color: #e4e4e4;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
    height: 14px;
    width: 14px;
  }
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
      <QuotationCont>
        <SvgCont width="127" height="125" viewBox="0 0 127 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.2961 112.429L33.29 112.539L33.2915 112.525L33.2927 112.512L32.2961 112.429ZM9.14557 112.429L8.14944 112.516L8.15229 112.549L8.15721 112.581L9.14557 112.429ZM1.42871 25L2.42491 24.9121L2.42375 24.9005L1.42871 25ZM1 20.7143H0V20.7642L0.00496608 20.8138L1 20.7143ZM6.57328 6.14286L7.25144 6.87777L6.57328 6.14286ZM35.9402 7.42857L36.7083 6.78826L35.9402 7.42857ZM39.5843 25L38.5959 24.8479L38.5906 24.8823L38.5877 24.9169L39.5843 25ZM118.296 112.429L119.29 112.539L119.292 112.525L119.293 112.512L118.296 112.429ZM95.1456 112.429L94.1494 112.516L94.1523 112.549L94.1572 112.581L95.1456 112.429ZM87.4287 25L88.4249 24.9121L88.4237 24.9005L87.4287 25ZM87 20.7143H86V20.7642L86.005 20.8138L87 20.7143ZM92.5733 6.14286L93.2514 6.87777L92.5733 6.14286ZM121.94 7.42857L121.172 8.06888L121.94 7.42857ZM125.584 25L124.596 24.8479L124.591 24.8823L124.588 24.9169L125.584 25ZM20.7209 125C24.3438 125 27.3041 123.976 29.4662 121.814C31.6118 119.67 32.8466 116.529 33.29 112.539L31.3023 112.318C30.8883 116.043 29.7651 118.688 28.0523 120.4C26.3559 122.096 23.9573 123 20.7209 123V125ZM12.297 121.707C14.5069 123.916 17.3441 125 20.7209 125V123C17.8098 123 15.5024 122.084 13.711 120.293L12.297 121.707ZM8.15721 112.581C8.75064 116.437 10.1033 119.514 12.297 121.707L13.711 120.293C11.9033 118.486 10.6837 115.849 10.1339 112.276L8.15721 112.581ZM0.432587 25.0879L8.14944 112.516L10.1417 112.341L2.42484 24.9121L0.432587 25.0879ZM0.00496608 20.8138L0.43368 25.0995L2.42375 24.9005L1.99503 20.6147L0.00496608 20.8138ZM5.89513 5.40794C1.92645 9.07012 0 14.2222 0 20.7143H2C2 14.6349 3.78907 10.0727 7.25144 6.87777L5.89513 5.40794ZM20.7209 0C14.7887 0 9.81979 1.78638 5.89513 5.40794L7.25144 6.87777C10.7578 3.64219 15.2206 2 20.7209 2V0ZM36.7083 6.78826C32.9111 2.23311 27.5325 0 20.7209 0V2C27.0564 2 31.8241 4.0526 35.1721 8.06888L36.7083 6.78826ZM40.5726 25.1521C41.7436 17.5434 40.5223 11.3636 36.7083 6.78826L35.1721 8.06888C38.5033 12.065 39.7114 17.5995 38.5959 24.8479L40.5726 25.1521ZM33.2927 112.512L40.5808 25.0831L38.5877 24.9169L31.2996 112.345L33.2927 112.512ZM106.721 125C110.344 125 113.304 123.976 115.466 121.814C117.612 119.67 118.847 116.529 119.29 112.539L117.302 112.318C116.888 116.043 115.765 118.688 114.052 120.4C112.356 122.096 109.957 123 106.721 123V125ZM98.297 121.707C100.507 123.916 103.344 125 106.721 125V123C103.81 123 101.502 122.084 99.711 120.293L98.297 121.707ZM94.1572 112.581C94.7506 116.437 96.1033 119.514 98.297 121.707L99.711 120.293C97.9033 118.486 96.6837 115.849 96.1339 112.276L94.1572 112.581ZM86.4326 25.0879L94.1494 112.516L96.1417 112.341L88.4248 24.9121L86.4326 25.0879ZM86.005 20.8138L86.4337 25.0995L88.4237 24.9005L87.995 20.6147L86.005 20.8138ZM91.8951 5.40794C87.9265 9.07012 86 14.2222 86 20.7143H88C88 14.6349 89.7891 10.0727 93.2514 6.87777L91.8951 5.40794ZM106.721 0C100.789 0 95.8198 1.78638 91.8951 5.40794L93.2514 6.87777C96.7578 3.64219 101.221 2 106.721 2V0ZM122.708 6.78826C118.911 2.23311 113.533 0 106.721 0V2C113.056 2 117.824 4.0526 121.172 8.06888L122.708 6.78826ZM126.573 25.1521C127.744 17.5434 126.522 11.3636 122.708 6.78826L121.172 8.06888C124.503 12.065 125.711 17.5995 124.596 24.8479L126.573 25.1521ZM119.293 112.512L126.581 25.0831L124.588 24.9169L117.3 112.345L119.293 112.512Z"/>
        </SvgCont>                
      </QuotationCont>
      <ReviewInnerCont>
        <ReviewDescription>
          {review}
        </ReviewDescription>
        <ReviewAuthor>
          {author}
        </ReviewAuthor>
      </ReviewInnerCont>
    </RevieweCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.home.reviews.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <DotsCont>
            {
              Array(items.length).fill(0).map((_,i) => <StyledDot /*style={{ backgroundColor: color }} className="carousel-text-dot"*/ key={i} slide={i} />)
            }         
          </DotsCont> 
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          {
              Array(items.length).fill(0).map((_,i) => <StyledDot /*style={{ backgroundColor: color }} className="carousel-text-dot"*/ key={i} slide={i} />)
          }         
        </CarouselProvider>
      </Visible>
    </Fragment>
  )
}