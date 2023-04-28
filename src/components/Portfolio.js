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
mansion24, mansion25, mansion26, memorial1, memorial2, memorial3, memorial4, memorial5, memorial6, dorothyFirst5, avery_lvt1, avery_lvt2,
avery_lvt3, avery_lvt4, avery_lvt5, avery_lvt6, avery_lvt7, avery_lvt8, sam_granite1, sam_granite2, sam_granite3, sam_granite4, 
sam_granite5, woodtile1, woodtile2, woodtile3, woodtile4, woodtile5 } from '../assets/images';
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
                src={ avery_lvt1 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt2 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt3 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt4 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt5 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt6 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt7 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt8 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile1 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile2 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile3 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile4 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile5 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ taiwo1 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo2 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo3 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo4 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo5 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo6 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo7 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo8 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit1 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit2 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit3 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit4 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit5 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit6 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit7 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit8 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit9 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit10 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit11 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit12 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit13 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit14 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit15 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit16 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit17 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit18 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image 
                  src={ mohit19 }
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Granite</Title>
            <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite1 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite2 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite3 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite4 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite5 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ granite1 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite2 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite3 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite4 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite5 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite6 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite7 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite8 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Carpet</Title>
            <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                <div class="carouselCntr">
                <Image
                    src={ cypress1 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress2 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress3 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress4 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress5 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress6 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress7 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress8 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress9 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress10 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress11 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress12 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress13 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress14 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress15 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress16 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress17 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress18 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress19 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress20 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy1 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy2 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy3 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy4 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothy5 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy6 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst1 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst2 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst3 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst4 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst5 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst6 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothyFirst7 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst8 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst9 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst10 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst11 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst12 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion1 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion2 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion3 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion4 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion5 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion6 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion7 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion8 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion9 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion10 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion11 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion12 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion13 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion14 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion15 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion16 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion17 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion18 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion19 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion20 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion21 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion22 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion23 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion24 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion25 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion26 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial1 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial2 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial3 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial4 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial5 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial6 }
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
            </Carousel>
    </div>
    </>
  );
  
}

export default Portfolio;