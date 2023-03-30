// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import loneStarLogo from '../assets/images/lonestarlogo.jpeg'
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
const { Text, Title } = Typography;
 
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


function Contact() {

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
      <title>Contact Us - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our Contact page where you find our
      email and phone number so you can reach us to get your general remodeling project started in
      the Houston Texas area. Houston Texas General Remodeling."/> 
      <link rel="canonical" href="/contact/"/>
    </Helmet>
    <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <Title style={{padding: '20px', margin: '0', textAlign: 'center'}}>Contact us today! </Title>
      <Text><b>Email:</b> LoneStarGeneralRemodeling@gmail.com</Text>
      <Text><b>Phone:</b> (346)-425-9986</Text>
      <Text><b>Instagram:</b> @LoneStarGeneralRemodeling</Text>
      <Text><b>TikTok:</b> @LoneStarGR</Text>
    </div>
    </>
  );
  
}

export default Contact;