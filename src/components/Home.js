// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image } from 'antd';
import { logo } from '../assets/images'
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Carousel from './Carousel';

const Yelp = require.context('../assets/images/YELP', true);
const imageListYelp = Yelp.keys().map(image => Yelp(image))


function Home() {
  return (
    <>
    <Helmet>
      <title>Home - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ logo }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
              <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
              <h3 style={{textAlign: 'center'}}>Your one stop shop for all remodeling and general contracting services in the Houston area! </h3>
              <h2 style={{textAlign: 'center'}}>Our Process and Mission Statment</h2>
              <p class="paragraph">We strive to satisfy our clients with quality and affordable work in the general remodeling industry. We service the greater Houston area and schedule 
                free estimates at our client's convenience where we take measurements and display samples to give our clients a quote within 1-2 days. We offer LVT/hardwood, granite countertops, painting, you know name it!
                A speedy and well done service is what we aim for so our clients can enjoy their new upgrade to their property as soon as possible. We can take care of every aspect of projects from material to labor and disposal of trash. 
                We also offer financing with Hearth and Synchrony for interested clients. Contact us today to get started with that general remodeling project you've been wanting!
              </p>
              <h2 style={{padding: '20px', margin: '0', textAlign: 'center', marginBottom: '0'}}>Reviews left by our satisfied customers!</h2>
              <div>
                <Carousel images={imageListYelp}/>
              </div>
              <h3 style={{padding: '20px', margin: '0', textAlign: 'center'}} level={2}>Be sure to checkout our <a href="https://www.yelp.com/biz/lone-star-general-remodeling-houston" rel="noreferrer">Yelp</a>, <a href="https://www.facebook.com/lonestarcarpetinstallation/" rel="noreferrer">Facebook</a>, and <a href="https://www.instagram.com/lonestargeneralremodeling/" rel="noreferrer">Instagram</a> for more!</h3>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default Home;