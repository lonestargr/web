// import logo from './logo.svg';
import '../App.css';
import {React} from 'react';
import '../index.css';
import { Image, Typography } from 'antd';
import { logo } from '../assets/images';
import { Helmet } from 'react-helmet-async';

const { Title } = Typography;
 
function About() {
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
              alt="Lone Star General Remodeling Houston General Remodeling Houston"
              rootClassName='logo'
              preview={false}
            />
            <Title>About Us</Title>
            <p class="paragraph">We are Lone Star General Remodeling. The family business has been serving the Houston area for well over a decade now, using our services to give customers great quality at an affordable rate. We offer general remodeling services that include <u>LVT installation, Kitchen & Bath remodels, invenstor flips and much more!</u> Call us today and set up a <em>free estimate!</em></p>
      </div>
    </div>
    </>
  );
  
}

export default About;