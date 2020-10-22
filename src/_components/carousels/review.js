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
    justify-content: flex-start;
  }
`
const ReviewInnerCont = styled.div`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ReviewAuthor = styled.p`
  text-align: left;
`
const ReviewDescription = styled.p`
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  stroke: ${props => props.theme.main.primaryColor};
`
const DotsCont = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: flex-start;
`
const QuotationCont = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
  @media(min-width: 768px){
    right: 4rem;
  }
`

const StyledDot = styled(Dot)`
  height: 3px;
  width: 32px;
  border: none;
  transition: 250ms ease;
  background-color: #dedede;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
  }
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
      <QuotationCont>
        <SvgCont width="282" height="203" viewBox="0 0 282 203" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75.2049 1L18.8092 86.1527C7.92579 101.995 1 118.828 1 138.631C1 178.236 29.6926 202 61.3534 202C96.9717 202 122.696 175.266 122.696 138.631C122.696 117.837 113.792 99.0246 95.9823 87.1429L133.58 1H75.2049ZM243.403 87.1429L281 1H222.625L166.23 86.1527C155.346 101.995 148.42 118.828 148.42 138.631C148.42 178.236 177.113 202 208.774 202C244.392 202 270.117 175.266 270.117 138.631C270.117 117.837 261.212 99.0246 243.403 87.1429Z"/>
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