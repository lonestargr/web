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
import { ms_linda7 } from '../assets/images';


function Kitchen() {
  return (
    <>
    <Helmet>
      <title>Kitchen - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ ms_linda7 }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
                <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
                <h3 style={{textAlign: 'center'}}>Elevate Your Home with Premier Kitchen and Bath Remodeling Services </h3>
                <p class="paragraph">Lone Star General Remodeling is your trusted partner for exquisite kitchen and bath
                remodeling services in Houston, Atascocita, Cinco Ranch, and the neighboring regions.
                Our commitment to excellence and passion for transforming spaces set us apart as the go-
                to choice for homeowners seeking personalized, high-quality renovations.
                </p>
                <h3 style={{textAlign: 'center'}}>Transforming Kitchens: Houston's Premier Remodeling Specialists</h3>
                <p class="paragraph">Your kitchen serves as the focal point of daily activities. Our specialized kitchen
                remodeling services in Houston are designed to elevate this essential area, blending
                functionality with stunning aesthetics. Whether you desire sleek modern upgrades, classic
                designs, or innovative layouts, our team is dedicated to ensuring that your kitchen not only
                meets but exceeds your expectations. We take pride in crafting kitchens that reflect your
                unique style while enhancing your culinary experience.
                </p>
                <h3 style={{textAlign: 'center'}}>Unveiling Splendor in Atascocita with Kitchen Remodeling</h3>
                <p class="paragraph">Situated in the tranquil locale of Atascocita, Lone Star General Remodeling understands
                the importance of a kitchen that seamlessly integrates with your lifestyle. Our experts
                reimagine kitchen spaces, combining practicality with elegance to create captivating areas
                that add significant value to your home. From efficient layouts to breathtaking designs, we
                tailor our services to meet the diverse needs and preferences of Atascocita homeowners.
                </p>
                <h3 style={{textAlign: 'center'}}>Redefine Kitchen Spaces in Cinco Ranch: Where Elegance Meets Functionality</h3>
                <p class="paragraph">Cinco Ranch's picturesque setting deserves kitchens that exemplify sophistication and
                practicality. Lone Star General Remodeling specializes in crafting bespoke kitchens that
                blend timeless elegance with modern functionality. We meticulously design and implement
                every aspect of your kitchen, ensuring a perfect balance between aesthetics and utility.
                Our goal is to create kitchens that truly reflect the essence of your home and lifestyle in
                Cinco Ranch.
                </p>
                <h3 style={{textAlign: 'center'}}>Comprehensive Solutions: Kitchen and Bath Remodeling in Houston</h3>
                <p class="paragraph">Our dedication to enhancing homes extends beyond kitchens. Lone Star General
                Remodeling provides comprehensive solutions for bath remodeling that transform ordinary
                spaces into luxurious retreats. Whether you envision a spa-like oasis or seek to upgrade
                your bath with contemporary fixtures, our attention to detail ensures a serene and
                rejuvenating environment within your home.
                </p>
                <h3 style={{textAlign: 'center'}}>What Sets Us Apart?</h3>
                <p class="paragraph"><b>Personalized Approach:</b> Every project is tailored to match your unique vision and needs.
                Craftsmanship Excellence: We uphold the highest standards in workmanship, ensuring
                enduring quality.
                </p>
                <p class="paragraph"><b>Meticulous Attention:</b> Every detail, from design to execution, receives thorough focus.
                Timely Project Completion: We value your time and adhere to agreed-upon schedules for
                efficient project delivery.
                </p>
                <p class="paragraph"><b>Client Satisfaction:</b> Your happiness and satisfaction are our primary goals, driving our
                commitment to excellence.
                </p>
                <h3 style={{textAlign: 'center'}}>Let's Make Your Dream Spaces a Reality</h3>
                <p class="paragraph">Ready to embark on the journey of transforming your kitchen and bath into areas of
                elegance and practicality? Contact Lone Star General Remodeling today to schedule a
                consultation. Our expert team is eager to collaborate with you, understand your
                aspirations, and bring your vision to life.
                </p>
                <p class="paragraph">Contact us now and take the first step towards revitalizing your kitchen and bath
                experience!
                </p>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default Kitchen;