import React, { useContext } from 'react';
import { Link as GatsbyLink, Link } from 'gatsby';
import Context from '../../_context';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const Footer = styled.footer`
    background-color: #333;
`
const MainFooter = styled.div`
  padding: 2rem 0;
`
const FooterRightsCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  @media(min-width: 768px){
    padding: .5rem 0;
  }  
`
const OfficeInfoCont = styled.ul`
  padding: 0;
  margin: 0;
  //margin-top: 2rem;
  list-style: none;
`
const OfficeInfo = styled.li`
  color: #8E8787;
  margin-bottom: .5rem;
`
const FooterRights = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: .8rem;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
  }      
`
const NavLink = styled(Link)`
  //color: #212121;
  color: #fff;
  transition: 250ms ease;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    display: block;
  }
  &:visited{
    color: #212121;
    color: #fff;
  }  
  &:hover{
    color: ${props => props.theme.main.primaryColor} !important;
  }
`
const SvgIcon = styled.span`
  margin-right: .5rem;
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  color: #fff;
`

const SocialItem = styled.li`
  margin-left: .5rem;
  a{
    color: ${props => props.theme.main.primaryColor};
    font-size: 1.3rem;
    &:visited{
      color: ${props => props.theme.main.primaryColor};
    }
  }
`

const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 180px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  font-weight: bold;
`

const DevelopBy = styled.a`
  color: #fff !important;
  font-weight: bold;
  margin-left: .5rem;
`

const LogoCont = styled.div`
  margin-bottom: 2rem;
`
const BackTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BackTop = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.main.primaryColor};
  margin-bottom: 1rem;
  transition: 250ms ease;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    filter: brightness(1.1);
  };
  &:active{
    box-shadow: none;
  }
`
 

export default ()=> {
  const office = useContext(Context).office;
  const state = useContext(Context);
  const builderId = state.builderId;
  const handleTop = ()=> window.scrollTo(0, 0);
  return(
    <Footer>
      <MainFooter>
        <Container>
          <Row align="center">
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                <GatsbyLink to={`/`} style={{ textDecoration: 'none' }}>
                  <LogoCont>
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                  </LogoCont>                        
                </GatsbyLink>         
                </Col>
                <Col xs={12}>
                  <OfficeInfoCont>
                    <OfficeInfo>
                      {office.address}
                    </OfficeInfo>
                    <OfficeInfo>
                      {office.phone}
                    </OfficeInfo>
                    <OfficeInfo>
                      {office.email}
                    </OfficeInfo>
                  </OfficeInfoCont>                                
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <NavCont>
                <Row>
                  <Col xs={6} md={6}>
                    <NavLink to={`/about`}>
                      Nosotros
                    </NavLink>
                  </Col>
                  <Col xs={6} md={6}>
                    <NavLink to={`/properties`}>
                      Propiedades
                    </NavLink>                  
                  </Col>
{/*                  <Visible md xs xxl lg xl>
                    <Col xs={6} md={6}>
                      <NavLink to="/news">
                        Noticias
                      </NavLink>                  
                    </Col>
</Visible>*/}
                  <Col xs={6} md={6}>
                    <NavLink to={`/contact`}>
                      Contacto
                    </NavLink>                  
                  </Col>                                          
                </Row>
              </NavCont>
            </Col>         
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                </Col>                            
                <Col xs={12}>
                    <Hidden xs>
                        <BackTopCont>
                          <BackTop onClick={handleTop} href="#top">
                            <img src="/icons/chevron-up.svg" alt="backtop" />
                          </BackTop>
                        </BackTopCont>
                    </Hidden>                   
                  <SocialNav>
                    <li>Síguenos en</li>
                    <SocialItem style={{ marginLeft: "1rem" }}>
                      <a href={office.facebook} rel="noopener" target="_blank">
                        <SvgIcon social={true}>
                          <FacebookFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>
                    <SocialItem>
                      <a href={office.instagram} rel="noopener" target="_blank">
                        <SvgIcon social={true}>
                          <InstagramFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>     
                    <SocialItem>
                      <a href={office.twitter} rel="noopener" target="_blank">
                        <SvgIcon social={true}>
                          <LinkedinFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>                         
                  </SocialNav>
                </Col>  
              </Row>
            </Col>                          
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>2020 © Todos los derechos reservados</li>
            <li>Desarrollado por <DevelopBy href="https://clasihome.com/" target="_blank">Clasihome</DevelopBy></li>
          </FooterRights>
        </Container>
      </FooterRightsCont>
      
    </Footer>
  )
}
/*
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <a href="/">
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                </a>
              </GatsbyLink>
*/