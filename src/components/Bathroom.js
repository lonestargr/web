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
import { ms_ruth5 } from '../assets/images';


function Bathroom() {
  return (
    <>
    <Helmet>
      <title>Bathroom - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ ms_ruth5 }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
            />
          </div>
          <div>
            <div class="headingCntr">
                <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
                <h3 style={{textAlign: 'center'}}>Transforming Spaces: Premier Bathroom Remodeling Services </h3>
                <p class="paragraph">Lone Star General Remodeling is your go-to destination for exquisite bathroom remodeling
                    in Atascocita, Cinco Ranch, University Place, and Houston. Our commitment to excellence
                    and passion for transforming spaces make us the preferred choice for homeowners
                    seeking personalized, high-quality renovations.
                </p>
                <h3 style={{textAlign: 'center'}}>Bathroom Remodeling in Atascocita: Elevate Your Personal Retreat</h3>
                <p class="paragraph">Nestled in the serene locale of Atascocita, Lone Star General Remodeling understands the
                    significance of a beautifully designed bathroom that harmonizes with your lifestyle. Our
                    experts reimagine bathroom spaces, blending practicality with elegance to create
                    captivating areas that add significant value and relaxation to your home.
                </p>
                <h3 style={{textAlign: 'center'}}>Redefine Bathrooms in Cinco Ranch: Where Style Meets Functionality</h3>
                <p class="paragraph">In the picturesque setting of Cinco Ranch, Lone Star General Remodeling specializes in
                    crafting bespoke bathrooms that blend timeless elegance with modern functionality. We
                    meticulously design and implement every aspect, ensuring a perfect balance between
                    aesthetics and utility to match your home's essence.
                </p>
                <h3 style={{textAlign: 'center'}}>Bathroom Renovation in University Place: Unveiling Luxury and Comfort</h3>
                <p class="paragraph">At Lone Star General Remodeling, we bring luxury and comfort to bathroom renovations in
                    University Place. Our focus lies in creating spaces that exude sophistication while ensuring
                    practicality and functionality, turning your vision into a tranquil reality.
                </p>
                <h3 style={{textAlign: 'center'}}>Comprehensive Solutions: Bathroom Remodeling in Houston</h3>
                <p class="paragraph">Our dedication extends beyond specific regions. Lone Star General Remodeling provides
                    comprehensive solutions for bathroom remodeling in Houston, catering to diverse
                    architectural styles and preferences. Whether you seek a modern spa-like retreat or a
                    traditional yet refreshed space, our attention to detail ensures a serene and rejuvenating
                    environment within your home.
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
                <h3 style={{textAlign: 'center'}}>Let's Bring Your Dream Bathrooms to Life</h3>
                <p class="paragraph">Ready to transform your bathroom into a haven of elegance and relaxation? Contact Lone
                    Star General Remodeling today to schedule a consultation. Our expert team is eager to
                    collaborate with you, understand your aspirations, and bring your vision to life.
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

export default Bathroom;