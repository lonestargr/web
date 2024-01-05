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
import { mr_steven_paint } from '../assets/images';

function House() {
  return (
    <>
    <Helmet>
      <title>House - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ mr_steven_paint }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
            <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
                <h3 style={{textAlign: 'center'}}>Your Trusted Partner for Home Renovations in Houston and Surrounding Areas </h3>
                <p class="paragraph">At Lone Star General Remodeling, we take pride in transforming houses into dream
                    homes across Houston, Pearland, Magnolia, Atascocita, and Katy. As your reliable general
                    contractor, we understand the significance of turning your vision into reality.
                </p>
                <h3 style={{textAlign: 'center'}}>Home Renovation in Pearland: Elevate Your Living Spaces</h3>
                <p class="paragraph">Nestled in the vibrant community of Pearland? Let us enhance your home's appeal with
                    our impeccable renovation services. Whether it's revamping kitchens, modernizing
                    bathrooms, or revitalizing your entire home, our team delivers excellence.
                </p>
                <h3 style={{textAlign: 'center'}}>House Renovations in Magnolia: Unveiling Elegance and Functionality</h3>
                <p class="paragraph">In the charming town of Magnolia, our expertise extends to creating spaces that exude
                    elegance and functionality. From intricate details to comprehensive renovations, trust us to
                    bring your renovation dreams to life.
                </p>
                <h3 style={{textAlign: 'center'}}>Home Renovation Services in Houston: Transforming Spaces, Enriching Lives</h3>
                <p class="paragraph">In the bustling city of Houston, where homes showcase diversity, our commitment lies in
                    revamping your space while keeping your unique style intact. Our tailored solutions cater
                    to your needs, ensuring a seamless renovation experience.
                </p>
                <h3 style={{textAlign: 'center'}}>House Renovations in Atascocita: Crafting Your Ideal Living Haven</h3>
                <p class="paragraph">Nestled in the serene locale of Atascocita, our team specializes in breathing new life into
                    homes. From minor touch-ups to complete transformations, your satisfaction remains at
                    the core of our services.
                </p>
                <h3 style={{textAlign: 'center'}}>House Remodeling in Katy: Redefining Comfort and Sophistication</h3>
                <p class="paragraph">In the vibrant community of Katy, we excel in house remodeling that redefines comfort and
                    sophistication. Let us revamp your dwelling to reflect your taste and lifestyle seamlessly.
                </p>
                <h3 style={{textAlign: 'center'}}>Our Comprehensive Services</h3>
                <p class="paragraph"><b>Interior Renovations:</b> Revitalize your interiors with our expert touch.
                </p>
                <p class="paragraph"><b>Exterior Makeovers:</b> Enhance curb appeal and structural integrity.
                </p>
                <p class="paragraph"><b>Kitchen and Bath Remodeling:</b> Transforming key areas for modern living.
                </p>
                <p class="paragraph"><b>Room Additions:</b> Expand your living space without compromising on quality.
                </p>
                <p class="paragraph"><b>Custom Renovations:</b> Tailored solutions to meet your unique requirements.
                </p>
                <h3 style={{textAlign: 'center'}}>Why Choose Lone Star General Remodeling?</h3>
                <p class="paragraph"><b>Experienced Professionals:</b> Our team comprises skilled artisans and experienced
                    professionals dedicated to delivering excellence.
                </p>
                <p class="paragraph"><b>Quality Craftsmanship:</b> We prioritize quality in every project, ensuring durable and
                    aesthetically pleasing outcomes.
                </p>
                <p class="paragraph"><b>Client-Centric Approach:</b> Your satisfaction is our priority, and we strive to exceed your
                    expectations at every step.
                </p>
                <p class="paragraph"><b>Local Expertise:</b> With a deep understanding of Houston and its neighboring areas, we
                    cater to diverse architectural styles and preferences.
                </p>
                <h3 style={{textAlign: 'center'}}>Get Started on Your Dream Renovation Project Today!</h3>
                <p class="paragraph">Partner with Lone Star General Remodeling and embark on a journey to transform your
                    house into the home of your dreams. Contact us to discuss your ideas and let us turn them
                    into reality.
                </p>
                <p class="paragraph">Contact us today to schedule a consultation and take the first step towards your dream
                    renovation!
                </p>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default House;