// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Image, Carousel, Typography } from 'antd';
import { mohit1, mohit2, mohit3, mohit4, mohit5, mohit6, mohit7, mohit8, mohit9, 
    mohit10, mohit11, mohit12, mohit13, mohit14, mohit15, mohit16, mohit17, mohit18, mohit19, taiwo1, 
    taiwo2, taiwo3, taiwo4, taiwo5, taiwo6, taiwo7, taiwo8, granite1, granite2, granite3, granite4, granite5, 
granite6, granite7, granite8, cypress1, cypress2, cypress3, cypress4, cypress5, cypress6, cypress7, cypress8, cypress9,
cypress10, cypress11, cypress12, cypress13, cypress14, cypress15, cypress16, cypress17, cypress18, cypress19, cypress20, 
dorothy1, dorothy2, dorothy3, dorothy4, dorothy5, dorothy6, dorothyFirst1, dorothyFirst2, dorothyFirst3, dorothyFirst4, 
dorothyFirst6, dorothyFirst7, dorothyFirst8, dorothyFirst9, dorothyFirst10, dorothyFirst11, dorothyFirst12, dorothyFirst13,
mansion1, mansion2, mansion3, mansion4, mansion5, mansion6, mansion7, mansion8, mansion9, mansion10, mansion11, mansion12,
mansion13, mansion14, mansion15, mansion16, mansion17, mansion18, mansion19, mansion20, mansion21, mansion22, mansion23,
mansion24, mansion25, mansion26, memorial1, memorial2, memorial3, memorial4, memorial5, memorial6, dorothyFirst5, avery_lvt1, avery_lvt2,
avery_lvt3, avery_lvt4, avery_lvt5, avery_lvt6, avery_lvt7, avery_lvt8, sam_granite1, sam_granite2, sam_granite3, sam_granite4, 
sam_granite5, woodtile1, woodtile2, woodtile3, woodtile4, woodtile5, bev_granite1, bev_granite2, bev_granite3,
concrete, mr_julio1, mr_julio2, mr_julio3, mr_steven_floor1, mr_steven_floor2, mr_steven_floor3, mr_steven_granite, mr_steven_paint, mr_steven_paint2,
ms_linda1, ms_linda10, ms_linda11, ms_linda12, ms_linda13, ms_linda14, ms_linda15, ms_linda16, ms_linda17, ms_linda18, ms_linda19,
ms_linda2, ms_linda20, ms_linda3, ms_linda4, ms_linda5, ms_linda6, ms_linda7, ms_linda8, ms_linda9, ms_ruth1, ms_ruth2, ms_ruth3,
ms_ruth4, ms_ruth5, ms_ruth6 } from '../assets/images';
import { Helmet } from 'react-helmet-async';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

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
          <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top'>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda1 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda2 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda3 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda4 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda5 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda6 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda7 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda8 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda9 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda10 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda11 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda12 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda13 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda14 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda15 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda16 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda17 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda18 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda19 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_linda20 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_julio1 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_julio2 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_julio3 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_floor1}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_floor2}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_floor3}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_granite}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_paint}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ mr_steven_paint2}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth1}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth2}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth3}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth4}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth5}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ ms_ruth6}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
            <div class="carouselCntr">
                <Image 
                  src={ concrete}
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
            </div>
          </Carousel>
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>LVT/Hardwood</Title>
        <p class="paragraph">LVT stands for Luxury Vinyl Tile and it is composed of PVC vinyl layers, a realistic 3D photo layer, 
        and an extremely durable protective layer. It can be used for a residential and commercial setting due to its durable nature and sleek look. 
        It's made to look like wood or stone, so there are a lot of options to choose from. Unlike Vinyl sheeting, 
        Luxury Vinyl Tile comes in tile or planks that are easy to install and replace. Our installation is top notch and the material we 
        provide is the best quality at the market price. The process involving LVT installation is first we would go out give a free estimate to 
        show the client samples of varyting colors and styles of LVT and we would also take measurements of the areas that the client would like to get 
        the LVT installed. We would then take that information and generate a quote for the client typically within 1-2 business days. After the client accepts the quote 
        we start organizing and getting ready for install. An average installation of 800-1500 sq ft would typically take somewhere between 2-3 business days. We work with vendors such as ProSource, Floor & Decor amongst others in the Greater Houston Area to 
        deliver the best material and as close as possible to exactly what our clients are looking for. Whether it be a specific color such or material we will 
        do our due diligence to make it happen and get it installed with quality and care. We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
        Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well! We can install
        new baseboards and quarter round trim plus we included removal of existing flooring at an affordable rate including removing ceramic tile, laminate flooring, carpet, etc. 
        </p>
        <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top' style={{width: '100%'}}>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt1 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt2 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt3 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt4 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt5 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt6 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt7 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ avery_lvt8 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile1 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile2 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile3 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile4 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ woodtile5 }
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                preview={false}
              />
              </div>
              <div class="carouselCntr">
              <Image
                src={ taiwo1 }
                preview={false}
                alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
              />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo2 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo3 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo4 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo5 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo6 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo7 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ taiwo8 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit1 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit2 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit3 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit4 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit5 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit6 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit7 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit8 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit9 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit10 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit11 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit12 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit13 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit14 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit15 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit16 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit17 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image
                  src={ mohit18 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
              <div class="carouselCntr">
                <Image 
                  src={ mohit19 }
                  preview={false}
                  alt="Lone Star General Remodeling Houston General Remodeling LVT laminate hardwood Houston"
                />
              </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Granite</Title>
            <p class="paragraph">We offer quality granite countertop installations and quartz countertop installations at an 
            affordable rate! We typically finish a kitchen remodel countertop installation within a day. The process would be something like this. First, 
            we would give a free estimate at the client's convenience to take measurements to figure out how many slabs we would need for the project. Second, we would calculate the 
            total and deliver a quote for the project to the client. Finally, if the client accepts the quote then we would encourage the client 
            to visit our vendors such as Granite Expo to pick their slabs in person. Slabs can vary in quality and look so it is important for the client to pick their slabs so they know what 
            will be getting installed in their home! We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
            Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well!
            </p>
            <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top' style={{width: '100%'}}>
                <div class="carouselCntr">
                <Image
                    src={ bev_granite1 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ bev_granite2 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ bev_granite3 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite1 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite2 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite3 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite4 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ sam_granite5 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ granite1 }
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    preview={false}
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite7 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ granite8 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling granite countertop cabinets Houston"
                    />
                </div>
            </Carousel>
            <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>Carpet</Title>
            <p class="paragraph">Carpet is a cost friendly and easy to install material for both residential and commercial applications.
            The process of getting carpet installed begins with a free estimate followed by a sample showing then a quote would be generated depending on the
            square yards and quality of carpet selected by the client. If the quote is accepted by the client then we would begin with the installation which usually is done within a day. 
            We serve the Greater Houston Area such as Cypress, Katy, Heights, University Place,
            Pasadena, Spring, Conroe, The Woodlands, Cinco Ranch, Fulshear, Pearland, Sugar Land, Atascocita, Humble, Magnolia, Tomball, and other areas as well!
            </p>
            <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top'>
                <div class="carouselCntr">
                <Image
                    src={ cypress1 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress7 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress8 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress9 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress10 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress11 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress12 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress13 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress14 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress15 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress16 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ cypress17 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress18 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress19 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ cypress20 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy1 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothy5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothy6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst1 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ dorothyFirst7 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst8 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst9 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst10 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst11 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst12 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ dorothyFirst13 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion1 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion7 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion8 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion9 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion10 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion11 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion12 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion13 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion14 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion15 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion16 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion17 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion18 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion19 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion20 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion21 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion22 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion23 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion24 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                <Image
                    src={ mansion25 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ mansion26 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial1 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial2 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial3 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial4 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial5 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
                <div class="carouselCntr">
                    <Image
                    src={ memorial6 }
                    preview={false}
                    alt="Lone Star General Remodeling Houston General Remodeling carpet installation Houston"
                    />
                </div>
            </Carousel>
    </div>
    </>
  );
  
}

export default Portfolio;