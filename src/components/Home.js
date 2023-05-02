// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Carousel, Typography } from 'antd';
import yelp1 from '../assets/images/yelp1.png'
import yelp2 from '../assets/images/yelp2.png'
import yelp3 from '../assets/images/yelp3.png'
import yelp4 from '../assets/images/yelp4.png'
import yelp5 from '../assets/images/yelp5.png'
import yelp6 from '../assets/images/yelp6.jpg'
import { logo } from '../assets/images'
import { Helmet } from 'react-helmet-async';


const { Title } = Typography;


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
              <Title style={{padding: '20px', margin: '0', textAlign: 'center'}}>Reviews left by our satisfied customers!</Title>
              <Title style={{padding: '20px', margin: '0', textAlign: 'center'}} level={2}>Be sure to checkout our Yelp, Facebook, and Instagram for more!</Title>
          </div>
            <div style={{padding: '20px', margin: '0'}}>
                <Carousel style={{}} autoplay effect="fade" dotPosition='top'>
                  <div class="carouselCntr">
                    <Image
                        src={ yelp1 }
                        alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    height={350}
                    width={400}
                    src={ yelp6 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp2 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp3 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp4 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
                    />
                  </div>
                  <div class="carouselCntr">
                    <Image
                    src={ yelp5 }
                    alt="Lone Star General Remodeling Houston General Remodeling yelp"
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