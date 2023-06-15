// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Carousel } from 'antd';
import yelp1 from '../assets/images/yelp1.png'
import yelp2 from '../assets/images/yelp2.png'
import yelp3 from '../assets/images/yelp3.png'
import yelp4 from '../assets/images/yelp4.png'
import yelp5 from '../assets/images/yelp5.png'
import yelp6 from '../assets/images/yelp6.jpg'
import { logo } from '../assets/images'
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


function Home() {
  return (
    <>
    <Helmet>
      <title>Home - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling."/> 
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
              <h3 style={{padding: '20px', margin: '0', textAlign: 'center'}} level={2}>Be sure to checkout our Yelp, Facebook, and Instagram for more!</h3>
            </div>
            <div style={{padding: '20px', margin: '0'}}>
                <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top'>
                  <div class="carouselCntr">
                    <Image
                      src={ yelp1 }
                      alt="Lone Star General Remodeling Houston General Remodeling yelp"
                      preview={false}
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    height={350}
                    width={400}
                    src={ yelp6 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    preview={false}
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp2 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    preview={false}
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp3 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    preview={false}
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp4 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    preview={false}
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp5 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    preview={false}
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