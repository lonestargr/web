// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import loneStarLogo from '../assets/images/lonestarlogo.jpeg'
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { mohit1, mohit2, mohit3, mohit4, mohit5, mohit6, mohit7, mohit8, mohit9, 
    mohit10, mohit11, mohit12, mohit13, mohit14, mohit15, mohit16, mohit17, mohit18, mohit19, taiwo1, 
    taiwo2, taiwo3, taiwo4, taiwo5, taiwo6, taiwo7, taiwo8, granite1, granite2, granite3, granite4, granite5, 
granite6, granite7, granite8, cypress1, cypress2, cypress3, cypress4, cypress5, cypress6, cypress7, cypress8, cypress9,
cypress10, cypress11, cypress12, cypress13, cypress14, cypress15, cypress16, cypress17, cypress18, cypress19, cypress20, 
dorothy1, dorothy2, dorothy3, dorothy4, dorothy5, dorothy6, dorothyFirst1, dorothyFirst2, dorothyFirst3, dorothyFirst4, 
dorothyFirst6, dorothyFirst7, dorothyFirst8, dorothyFirst9, dorothyFirst10, dorothyFirst11, dorothyFirst12, dorothyFirst13,
mansion1, mansion2, mansion3, mansion4, mansion5, mansion6, mansion7, mansion8, mansion9, mansion10, mansion11, mansion12,
mansion13, mansion14, mansion15, mansion16, mansion17, mansion18, mansion19, mansion20, mansion21, mansion22, mansion23,
mansion24, mansion25, mansion26, memorial1, memorial2, memorial3, memorial4, memorial5, memorial6, dorothyFirst5 } from '../assets/images';
import { Helmet } from 'react-helmet-async';

const { Title } = Typography;
 
const { Header, Content, Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const contentStyle = {
  margin: 0,
  height: '160px',
  width: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function Portfolio() {

  let menu = ['Home', 'Portfolio', 'About', 'Contact']

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
    <Helmet>
      <title>Portfolio - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our portfolio where you can find LVT laminate wood installations, 
      Granite Countertop installations, cabinet installations, carpet installations, and full home remodels with 
      kitchen and bath Kitchen and Bath remodels. Houston Texas General Remodeling."/> 
      <link rel="canonical" href="/portfolio/"/>
    </Helmet>
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexDirection: 'column'}}>
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>LVT/Hardwood</Title>
        <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
        <div class="carouselCntr">
              <Image
                src={ taiwo1 }
              />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo2 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo3 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo4 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo5 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo6 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo7 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo8 }
                />
              </div>
              <div class="carouselCntr">
              <Image
                src={ mohit1 }
              />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit2 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit3 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit4 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit5 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit6 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit7 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit8 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit9 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit10 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit11 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit12 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit13 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit14 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit15 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit16 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit17 }
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit18 }
                />
              </div>
              <div class="carouselCntr">
                <Image 
                  src={ mohit19 }
                />
              </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Granite</Title>
            <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                <div class="carouselCntr">
                <Image
                    src={ granite1 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite4 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite5 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite6 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite7 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite8 }
                    />
                </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Carpet</Title>
            <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                <div class="carouselCntr">
                <Image
                    src={ cypress1 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress4 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress5 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress6 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress7 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress8 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress9 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress10 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress11 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress12 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress13 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress14 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress15 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress16 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress17 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress18 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress19 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress20 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy1 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy4 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothy5 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy6 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst1 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst4 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst5 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst6 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothyFirst7 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst8 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst9 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst10 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst11 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst12 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion1 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion4 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion5 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion6 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion7 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion8 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion9 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion10 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion11 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion12 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion13 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion14 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion15 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion16 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion17 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion18 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion19 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion20 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion21 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion22 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion23 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion24 }
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion25 }
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion26 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial1 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial2 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial3 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial4 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial5 }
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial6 }
                    />
                </div>
            </Carousel>
    </div>
    </>
  );
  
}

export default Portfolio;