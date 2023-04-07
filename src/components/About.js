// import logo from './logo.svg';
import '../App.css';
import {React, useEffect} from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { logo } from '../assets/images'
import axios from 'axios';
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

function About() {
  
//   useEffect(() => {
  
//     axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/gJErbA7eNN67WgMl490xXg/reviews', {
//     headers: {
//       Authorization: `Bearer Us4GyU9Qrf4ndXPS5IRhl60SeaPWYOfekZl2wZLoY9KZIUNSbHmh5sZ6fHDcL2_yTCIiJkfxW5rGGEk9zHaZph5JY1QmQkHeVZP8TUoOjSKieNGNjapvjAib2neuY3Yx`
//   }})
//   .then((res) => {
//   console.log(res)
//   })
//   .catch((err) => {
//   console.log ('error' + err)
//   })
// })

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
      <title>About Us - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our About Us page where you can read about our 
      history and process dealing with General Remodeling in the Houston Texas area."/> 
      <link rel="canonical" href="/about/"/>
    </Helmet>
    <div>
      <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ logo }
            />
            <Title style={{padding: '40px 20px', margin: '0', textAlign: 'center'}} level={5}>We are Lone Star General Remodeling. The family business has been serving the Houston area for well over a decade now, using our services to give customers great quality at an affordable rate. We offer general remodeling services that include <u>LVT installation, Kitchen & Bath remodels, invenstor flips and much more!</u> Call us today and set up a <em>free estimate!</em></Title>
      </div>
    </div>
    </>
  );
  
}

export default About;