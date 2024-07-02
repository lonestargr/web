// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Typography } from 'antd';
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Carousel from './Carousel';

const { Title } = Typography;

const recentProjects = require.context('../assets/images/KBFR', true);
const imageListRP = recentProjects.keys().map(image => recentProjects(image))

const LVT = require.context('../assets/images/LVT', true);
const imageListLVT = LVT.keys().map(image => LVT(image))

const Granite = require.context('../assets/images/Granite', true);
const imageListGranite = Granite.keys().map(image => Granite(image))

const Carpet = require.context('../assets/images/Carpet', true);
const imageListCarpet = Carpet.keys().map(image => Carpet(image))

function Portfolio() {
  return (
    <>
    <Helmet>
      <title>Portfolio - Lone Star General Remodeling</title>
      <meta name="description" content="Welcome to our portfolio where you can find LVT laminate wood installations, 
      Granite Countertop installations, cabinet installations, carpet installations, and full home remodels with 
      kitchen and bath Kitchen and Bath remodels. Houston Texas General Remodeling Commerical Remodeling
      Commerical Construction."/> 
      <link rel="canonical" href="/portfolio/"/>
    </Helmet>
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px 0px', flexDirection: 'column'}}>
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Recent Projects</Title>
        <p class="paragraph">We recently completed projects dealing with commercial office remodeling, kitchen remodels including new 
        quartz countertops and painted cabinets, and a bathroom remodel along with a home renovation to get it ready for sale! We serviced
        cities such as Spring, Santa Fe, Alvin, Pasadena, Pearland, South Houston, and Katy! We will regularly keep this updated so stay tuned! 
        </p>
        <div>
          <Carousel images={imageListRP}/>
        </div>

        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>LVT/Hardwood</Title>
        <p class="paragraph">LVT stands for Luxury Vinyl Tile and it is composed of PVC vinyl layers, a realistic 3D photo layer, 
        and an extremely durable protective layer. It can be used for a residential and commercial setting due to its durable nature and sleek look. 
        It's made to look like wood or stone, so there are a lot of options to choose from. Unlike Vinyl sheeting, 
        Luxury Vinyl Tile comes in tile or planks that are easy to install and replace. Our installation is top notch and the material we 
        provide is the best quality at the market price. The process involving LVT installation is first we would go out give a free estimate to 
        show the client samples of varying colors and styles of LVT and we would also take measurements of the areas that the client would like to get 
        the LVT installed. We would then take that information and generate a quote for the client typically within 1-2 business days. After the client accepts the quote 
        we start organizing and getting ready for install. An average installation of 800-1500 sq ft would typically take somewhere between 2-3 business days. We work with vendors such as ProSource, Floor & Decor amongst others in the Greater Houston Area to 
        deliver the best material and as close as possible to exactly what our clients are looking for. Whether it be a specific color such or material we will 
        do our due diligence to make it happen and get it installed with quality and care. We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
        Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well! We can install
        new baseboards and quarter round trim plus we included removal of existing flooring at an affordable rate including removing ceramic tile, laminate flooring, carpet, etc. 
        </p>
        <div>
          <Carousel images={imageListLVT}/>
        </div>
      
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Granite</Title>
        <p class="paragraph">We offer quality granite countertop installations and quartz countertop installations at an 
        affordable rate! We typically finish a kitchen remodel countertop installation within a day. The process would be something like this. First, 
        we would give a free estimate at the client's convenience to take measurements to figure out how many slabs we would need for the project. Second, we would calculate the 
        total and deliver a quote for the project to the client. Finally, if the client accepts the quote then we would encourage the client 
        to visit our vendors such as Granite Expo to pick their slabs in person. Slabs can vary in quality and look so it is important for the client to pick their slabs so they know what 
        will be getting installed in their home! We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
        Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well!
        </p>

        <div>
          <Carousel images={imageListGranite}/>
        </div>
        
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Carpet</Title>
        <p class="paragraph">Carpet is a cost friendly and easy to install material for both residential and commercial applications.
        The process of getting carpet installed begins with a free estimate followed by a sample showing then a quote would be generated depending on the
        square yards and quality of carpet selected by the client. If the quote is accepted by the client then we would begin with the installation which usually is done within a day. 
        We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
        Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well!
        </p>

        <div>
          <Carousel images={imageListCarpet}/>
        </div>
            
    </div>
    </>
  );
  
}

export default Portfolio;