// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet-async';
const { Text, Title } = Typography;


function Contact() {

  return (
    <>
    <Helmet>
      <title>Contact Us - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our Contact page where you can find our
      email and phone number so you can reach us to get your general remodeling project started in
      the Houston Texas area. Houston Texas General Remodeling. Commerical Remodeling
      Commerical Construction"/> 
      <link rel="canonical" href="/contact/"/>
    </Helmet>
    <div class='contact'>
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