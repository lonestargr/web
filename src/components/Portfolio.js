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
sam_granite5, woodtile1, woodtile2, woodtile3, woodtile4, woodtile5, bev_granite1, bev_granite2, bev_granite3 } from '../assets/images';
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
      kitchen and bath Kitchen and Bath remodels. Houston Texas General Remodeling."/> 
      <link rel="canonical" href="/portfolio/"/>
    </Helmet>
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexDirection: 'column'}}>
        <Title style={{margin: '0', height: '50px', alignSelf: 'center'}}>LVT/Hardwood</Title>
        <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top'>
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
            <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>} dotPosition='top'>
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