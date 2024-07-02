// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Carousel } from 'antd';
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { commercial1, commercial2, commercial3, commercial4 } from '../assets/images';


function Commercial() {
  return (
    <>
    <Helmet>
      <title>Commercial - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our homepage where you can find General Remodeling reviews and our
      portfolio of LVT laminate, granite, carpet installations and much more in the Houston area! Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/"/>
    </Helmet>
    <div>
        <div style={{ position: 'sticky', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Image
              src={ commercial4 }
              alt="Lone Star General Remodeling Houston General Remodeling"
              rootClassName='logo'
              preview={false}
              height={950}
              width={650}
            />
          </div>
          <div>
            <div class="headingCntr">
                <h1 style={{marginBottom: '0'}}>Lone Star General Remodeling</h1>
                <h3 style={{textAlign: 'center'}}>Elevate Your Business Space with Professional Commercial Remodeling </h3>
                <p class="paragraph">Lone Star General Remodeling is your trusted partner for exceptional commercial
                    remodeling services in Sugar Land, Houston, Dallas, Austin, and beyond. With a
                    commitment to quality and a focus on creating spaces that resonate with your business
                    vision, our team stands ready to transform your commercial property.
                </p>
                <h3 style={{textAlign: 'center'}}>Commercial Remodeling in Sugar Land: Enhancing Business Environments</h3>
                <p class="paragraph">In the bustling hub of Sugar Land, Lone Star General Remodeling excels in commercial
                    remodeling. Our expert team understands the unique needs of businesses in this vibrant
                    area, offering tailored solutions that elevate the functionality and aesthetics of your
                    commercial space. From retail outlets to office complexes, our remodeling services
                    breathe new life into your business environment.
                </p>
                <h3 style={{textAlign: 'center'}}>Elevate Your Business with Commercial Remodeling in Houston</h3>
                <p class="paragraph">Houston businesses demand spaces that mirror innovation and efficiency. Lone Star
                    General Remodeling specializes in commercial remodeling for a diverse range of
                    industries. Our focus on modern designs and functional layouts ensures that your business
                    space not only meets but exceeds your expectations, creating an environment that fosters
                    growth and productivity.
                </p>
                <h3 style={{textAlign: 'center'}}>Redefining Business Spaces in Dallas and Austin: Tailored Commercial Solutions</h3>
                <p class="paragraph">Lone Star General Remodeling extends its expertise in commercial remodeling to the
                    vibrant cities of Dallas and Austin. Our team collaborates closely with businesses,
                    understanding their unique requirements to deliver customized remodeling solutions.
                    Whether it's revamping retail spaces or modernizing office complexes, our services
                    enhance your business identity.
                </p>
                <h3 style={{textAlign: 'center'}}>Expert Commercial HVAC Services in Houston</h3>
                <p class="paragraph">In addition to remodeling, Lone Star General Remodeling offers expert commercial HVAC
                    services in Houston. We understand the critical importance of a properly functioning HVAC
                    system for your business. Our skilled technicians ensure efficient installation, repair, and
                    maintenance, providing a comfortable environment conducive to productivity.
                </p>
                <h3 style={{textAlign: 'center'}}>Why Choose Us for Your Commercial Remodeling Needs?</h3>
                <p class="paragraph"><b>Expertise and Precision:</b> Skilled professionals ensuring impeccable remodeling.
                </p>
                <p class="paragraph"><b>Tailored Solutions:</b> Customized designs to match your business identity.
                </p>
                <p class="paragraph"><b>Commitment to Quality:</b> Emphasis on durable and visually appealing commercial spaces.
                </p>
                <p class="paragraph"><b>Customer-Centric Approach:</b> Your business success is our ultimate goal.
                </p>
                <p class="paragraph"><b>Comprehensive HVAC Services:</b> Ensuring a comfortable and efficient working
                    environment.
                </p>
                <h3 style={{textAlign: 'center'}}>Let's Enhance Your Business Space Together</h3>
                <p class="paragraph">Ready to elevate your commercial property to new heights? Contact Lone Star General
                    Remodeling today for a consultation. Our dedicated team is eager to collaborate with you,
                    bringing your commercial remodeling vision to reality.
                </p>
                <p class="paragraph">Contact us now and take the first step towards enhancing your business environment!
                </p>
            </div>
        </div>
        {/* <IconFont type="icon-facebook" /> */}
    </div>
    </>
  );
  
}

export default Commercial;