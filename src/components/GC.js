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
import { genCon, logo } from '../assets/images'
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


function GC() {
  return (
    <>
    <Helmet>
      <title>GC - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ genCon }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
            <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
                <h3 style={{textAlign: 'center'}}>Welcome to Lone Star General Remodeling - Your Premier Choice for General
                    Contracting in Houston, Katy, Spring </h3>
                <p class="paragraph">Are you seeking exceptional craftsmanship and reliability for your next construction or
                    remodeling project in Houston or its surrounding areas? Look no further than Lone Star
                    General Remodeling! As a trusted name in the industry, we take immense pride in
                    transforming visions into reality and exceeding our client&#39;s expectations.
                </p>
                <h3 style={{textAlign: 'center'}}>Your Trusted General Contractor in Houston</h3>
                <p class="paragraph">At Lone Star General Remodeling, we understand that every project is unique. As your go-
                    to general contractor in Houston, our mission is to provide unparalleled services tailored to
                    your specific needs. Whether it's a commercial construction project, a comprehensive
                    remodeling endeavor, or a renovation to revitalize your space, our team is equipped with
                    the expertise and dedication to bring your vision to life.
                </p>
                <h3 style={{textAlign: 'center'}}>Comprehensive Services Offered: </h3>
                <p class="paragraph"><b>1. General Remodeling in Houston: </b>
                    From residential upgrades to commercial renovations, our commitment to excellence
                    shines through every project we undertake. We take pride in enhancing spaces, ensuring
                    functionality, and delivering top-notch quality in every aspect of our remodeling services.
                </p>
                <p class="paragraph"><b>2. Commercial Construction and Remodeling: </b>
                    For businesses in Houston seeking to expand, revamp, or construct anew, our team
                    specializes in commercial construction and remodeling. We're dedicated to optimizing
                    spaces that reflect your brand identity, while also ensuring functionality and efficiency.
                </p>
                <p class="paragraph"><b>3. Serving Surrounding Areas: </b>
                    Beyond Houston, we extend our services to surrounding areas such as Katy and Spring.
                    Our expertise in commercial remodeling in Katy and general contracting in Spring allows
                    us to cater to a diverse clientele across different regions.
                </p>
                <h3 style={{textAlign: 'center'}}>Why Choose Lone Star General Remodeling?</h3>
                <p class="paragraph"><b>Expertise: </b>
                    Our team comprises seasoned professionals with years of experience in the
                    industry, guaranteeing superior craftsmanship and attention to detail.
                </p>
                <p class="paragraph"><b>Custom Solutions: </b>
                    We prioritize your unique needs and preferences, crafting bespoke
                    solutions that align perfectly with your vision.
                </p>
                <p class="paragraph"><b>Quality Assurance: </b>
                    From materials to workmanship, we uphold the highest standards to
                    ensure lasting results that stand the test of time.
                </p>
                <p class="paragraph"><b>Client-Centric Approach: </b>
                    Communication and transparency are at the core of our values.
                    We keep you involved and informed at every stage of the project.
                </p>
                <h3 style={{textAlign: 'center'}}>Serving Houston and Beyond</h3>
                <p class="paragraph">Lone Star General Remodeling is committed to being your trusted partner in construction
                    and remodeling endeavors. Our dedication to excellence and customer satisfaction sets us
                    apart as a premier general contractor in Houston and its neighboring areas.
                </p>
                <p class="paragraph">Ready to embark on your remodeling journey? Contact us today to discuss your project
                    and discover how Lone Star General Remodeling can bring your vision to life!
                </p>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default GC;