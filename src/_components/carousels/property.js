import React, { useContext, Fragment } from 'react';
import { chunkArray } from '../../_util';
import Context from '../../_context';
import { PropertyCard } from '../cards'
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { Row, Col } from 'react-grid-system';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { v1 as uuid } from 'uuid';

export default ()=> {
  const color = useContext(Context).main.primaryColor;
  const items = useContext(Context).home.properties.items;
  const itemsDesk = chunkArray(items.map(item => item), 3);
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          //naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={uuid()} index={index}>
                  <Row style={{ margin: "0 1rem" }}>
                    {
                      mainItem.map(item => (
                        <Col key={uuid()} xs={1} md={4}>
                          <PropertyCard {...item} />
                        </Col>
                      ))
                    }
                  </Row>
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button">
            <ArrowLeftOutlined style={{ color, fontSize: 26 }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button">
          <ArrowRightOutlined style={{ color, fontSize: 26 }} />
          </ButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={130}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <PropertyCard {...item} />
                </Slide>
              ))
            }
          </Slider>
        </CarouselProvider>        
      </Visible>
    </Fragment>
  )
}