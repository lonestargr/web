// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography, Card } from 'antd';
import loneStarLogo from '../assets/images/lonestarlogo.jpeg'
import yelp1 from '../assets/images/yelp1.png'
import yelp2 from '../assets/images/yelp2.png'
import yelp3 from '../assets/images/yelp3.png'
import yelp4 from '../assets/images/yelp4.png'
import yelp5 from '../assets/images/yelp5.png'
import yelp6 from '../assets/images/yelp6.jpg'
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { logo } from '../assets/images'
import { Helmet } from 'react-helmet-async';


const { Title } = Typography;
 
const { Header, Content, Footer } = Layout;

const imgCarousel = [
  {
    id: 1,
    uri: {yelp1}
  },
  {
    id: 2,
    uri: {yelp2}
  },
  {
    id: 3,
    uri: {yelp3}
  },
  {
    id: 4,
    uri: {yelp4}
  }
];

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


function Home() {

  let menu = ['Home', 'Portfolio', 'About', 'Contact']

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  let result;

  return (
    <>
    <Helmet>
      <title>Home - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage were you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ logo }
            />
          </div>
          <div>
            <div class="headingCntr">
              <Title style={{padding: '20px', margin: '0', textAlign: 'center'}}>Reviews left by our satisfied customers!</Title>
              <Title style={{padding: '20px', margin: '0', textAlign: 'center'}} level={2}>Be sure to checkout our Yelp, Facebook, and Instagram for more!</Title>
          </div>
            <div style={{padding: '20px', margin: '0'}}>
                <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                  <div class="carouselCntr">
                    <Image
                        src={ yelp1 }
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    height={350}
                    width={400}
                    src={ yelp6 }
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp2 }
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp3 }
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp4 }
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp5 }
                    />
                  </div>
                </Carousel>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default Home;