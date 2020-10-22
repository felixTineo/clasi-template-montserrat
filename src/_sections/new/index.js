import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { NewsCard } from '../../_components/cards';

const MainCont = styled.article`

`
const Header = styled.header`
    height: calc(100vh - 8rem);
    margin-top: 1.5rem;
    //margin-bottom: 4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media(min-width: 576px){
      min-height: calc(100vh - 87px);
      margin-top: 0;
    }
    ::before{
      content: " ";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 90%;
      max-width: 975px;
      height: 60%;
      background-image: url(${props => props.theme.singleNew.hero.background});
      background-size: cover;
      background-position: center;
      opacity: 1;
      @media(min-width: 576px){
        min-height: calc(100vh - 87px);
        opacity: 1;
        width: 60%;
        height: 100%;
        top: 0;
      }
    }
`
const TitleCont = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
height: calc(100vh - 8rem);
@media(min-width: 576px){
  min-height: calc(100vh - 87px);
  margin-top: 0;
}    
`
const Title = styled.h1`
position: relative;
z-index: 5;
//margin-top: 8rem;
user-select: none;
@media(min-width: 576px){
  width: 30%;
  }
`
const NewInfoCont = styled.div`
  display: flex;
  align-items: center;
`
const NewDate = styled.p`
  color: #919191;
`
const NewTag = styled.p`
  background-color: ${props => props.theme.main.primaryColor};
  padding: .5rem 2rem;
  color: #fff;
  margin-left: 2rem;
`

const IntroCont = styled.div`
  padding: 4rem 0 0;
`
const IntroFooter = styled.div`
  margin: 4rem 0;
  padding: 2rem;
  //color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
  //background-color: ${props => props.theme.main.primaryColor};
`
const SocialCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`
const SocialItem = styled.li`

`
const SvgIcon = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
`
const SocialNav = styled.a`
  color: #212121;
  text-decoration: none; 
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &:visited{
    color: #212121;
  }
`
const SocialSpan = styled.span`
  opacity: 0;
  color: ${props => props.theme.main.primaryColor};
  transition: 250ms ease;
  ${SocialNav}:hover & {
    opacity: 1;
  }
`
const ArticleCont = styled.div`

`
const ArticleImg = styled.img`
  width: 100%;
`
const RelatedNewsCont = styled.div`
  margin-top: 6rem;
`
const RelatedNewsTitle = styled.div`
  margin: 4rem 0;
  font-weight: bold;
  color: ${props => props.theme.main.primaryColor};
`

export default ()=> {
  const state = useContext(Context).singleNew;
  const relatedNews = useContext(Context).news.items;
  return(
    <MainCont>
      <Header>
        <Container style={{ width: "100%" }}>
          <TitleCont>
            <Title className="animate__animated animate__fadeInDown">
            {state.hero.title}
            </Title>        
            <NewInfoCont>
              <NewDate>
                {state.hero.date}
              </NewDate>
              <NewTag>
                {state.hero.tag}
              </NewTag>
            </NewInfoCont>
          </TitleCont>          
        </Container>
      </Header>
      <IntroCont>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div dangerouslySetInnerHTML={{ __html: state.intro.title }} />
              <IntroFooter>
                <p style={{ margin:0 }}>
                  {state.intro.footer}
                </p>
              </IntroFooter>
            </Col>
            <Col xs={12} md={6}>
              <SocialCont>
                <SocialItem>
                  <SocialNav href="https://www.facebook.com" target="_blank">
                    <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm0.91016 6h2.6328v2.9805h-1.9355c-0.3833 0-0.76953 0.39326-0.76953 0.68555v1.957h2.7012c-0.1087 1.5007-0.33203 2.873-0.33203 2.873h-2.3828v8.5039h-3.5527v-8.5059h-1.7285v-2.8613h1.7285v-2.3398c0-0.42786-0.087828-3.293 3.6387-3.293z" />
                    </SvgIcon>                    
                    <SocialSpan>Compartir en facebook</SocialSpan>
                  </SocialNav>
                </SocialItem>
                <SocialItem>
                  <SocialNav href="https://www.instagram.com" target="_blank">
                    <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm-2.916 6h6.6504c3.0602 0 5.543 2.4808 5.543 5.541v6.6504c0 3.0602-2.4828 5.543-5.543 5.543h-6.6504c-3.0603 0-5.541-2.4828-5.541-5.543v-6.6504c0-3.0603 2.4808-5.541 5.541-5.541zm0 1.6621c-2.1392 0-3.8789 1.7397-3.8789 3.8789v6.6504c0 2.1392 1.7397 3.8809 3.8789 3.8809h6.6504c2.1392 0 3.8809-1.7417 3.8809-3.8809v-6.6504c0-2.1392-1.7417-3.8789-3.8809-3.8789h-6.6504zm3.3262 2.7715c2.4484 0 4.4336 1.9852 4.4336 4.4336 0 2.4484-1.9852 4.4336-4.4336 4.4336-2.4484 0-4.4336-1.9852-4.4336-4.4336 0-2.4484 1.9852-4.4336 4.4336-4.4336zm0 1.6621c-1.5273 0-2.7715 1.243-2.7715 2.7715 0 1.5273 1.2442 2.7715 2.7715 2.7715 1.5273 0 2.7715-1.2442 2.7715-2.7715 0-1.5285-1.2442-2.7715-2.7715-2.7715z"/>
                    </SvgIcon>
                    <SocialSpan>Compartir en instagram</SocialSpan>
                  </SocialNav>
                </SocialItem>                
              </SocialCont>
            </Col>            
          </Row>
        </Container>
      </IntroCont>
      <ArticleCont>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ArticleImg src={state.article.image} />
              <div dangerouslySetInnerHTML={{ __html: state.article.text }} />
            </Col>
          </Row>
        </Container>
      </ArticleCont>
      <RelatedNewsCont>
        <Container>
          <RelatedNewsTitle>
            Noticias relacionadas
          </RelatedNewsTitle>
          <Row>
            {
              relatedNews.slice(0, 3).map(item => (
                <Col key={item.id} xs={12} md={4}>
                  <NewsCard {...item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </RelatedNewsCont>
    </MainCont>
  )
}