// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Carousel } from 'antd';
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { lvt_risers } from '../assets/images';


function LVT() {
  return (
    <>
    <Helmet>
      <title>LVT - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ lvt_risers }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
              <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
              <h3 style={{textAlign: 'center'}}>Elevate Your Space with Expert LVT and Hardwood Flooring Installation </h3>
              <p class="paragraph">Lone Star General Remodeling is your trusted source for exceptional LVT and hardwood
                flooring installation in Magnolia, Sugar Land, The Heights, and Houston. Our commitment
                to quality craftsmanship and attention to detail ensures a transformative experience for
                your floors.
              </p>
              <h3 style={{textAlign: 'center'}}>LVT Installation in Magnolia: Transforming Your Floors with Elegance</h3>
              <p class="paragraph">In the serene surroundings of Magnolia, Lone Star General Remodeling excels in LVT
                installation, bringing a touch of elegance to your floors. Our expert team specializes in
                installing Luxury Vinyl Tiles, offering a perfect blend of style, durability, and easy
                maintenance. Enhance the beauty of your home with floors that reflect your taste and
                lifestyle.
              </p>
              <h3 style={{textAlign: 'center'}}>Elevate Your Space with LVT Flooring in Sugar Land</h3>
              <p class="paragraph">Sugar Land residents deserve floors that exude sophistication and practicality. Lone Star
                General Remodeling is your partner in LVT flooring, providing a wide array of designs and
                styles to suit your preferences. Our professional installation ensures a seamless finish,
                transforming your space into a stylish and functional area.
              </p>
              <h3 style={{textAlign: 'center'}}>Hardwood Flooring Installation in The Heights: Timeless Beauty, Lasting Quality</h3>
              <p class="paragraph">The Heights area demands the timeless appeal of hardwood flooring. Lone Star General
                Remodeling specializes in hardwood flooring installation, adding character and warmth to
                your home. Our skilled craftsmen ensure precision and finesse in every installation,
                enhancing the charm and value of your property.
              </p>
              <h3 style={{textAlign: 'center'}}>Comprehensive LVT Flooring Services in Houston</h3>
              <p class="paragraph">Beyond specific regions, Lone Star General Remodeling offers comprehensive LVT
                flooring services in Houston. From consultation to installation, our team guides you
                through the process, helping you choose the perfect flooring solution for your home. With
                our commitment to excellence, rest assured of floors that captivate and endure.
              </p>
              <h3 style={{textAlign: 'center'}}>Why Choose Us for Your Flooring Needs?</h3>
              <p class="paragraph"><b>Expertise and Precision:</b> Skilled professionals ensuring flawless installations.</p>
              <p class="paragraph"><b>Wide Range of Options:</b> Diverse styles and designs to match your preferences. </p>
              <p class="paragraph"><b>Quality Craftsmanship:</b> Emphasis on durable and visually appealing flooring solutions.</p>
              <p class="paragraph"><b>Client-Centric Approach:</b> Your satisfaction is our priority at every step. </p>
              <p class="paragraph"><b>Local Presence:</b> Understanding the diverse needs and styles prevalent in each area.</p>
              <h3 style={{textAlign: 'center'}}>Let's Transform Your Floors Together</h3>
              <p class="paragraph">Ready to elevate your space with top-notch LVT and hardwood flooring? Contact Lone
                Star General Remodeling today for a consultation. Our dedicated team is eager to
                collaborate with you, bringing your flooring vision to life.
              </p>
              <p class="paragraph">Contact us now and take the first step towards exquisite LVT and hardwood flooring
                installation!
              </p>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default LVT;