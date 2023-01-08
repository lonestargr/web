// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import loneStarLogo from '../assets/images/lonestarlogo.jpeg'
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const { Title } = Typography;
 
const { Header, Content, Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const contentStyle = {
  margin: 0,
  height: '160px',
  width: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function MainHeader() {

  let menu = ['Home', 'Portfolio', 'About', 'Contact']

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
        <Header style={{ display: 'flex', justifyContent: 'center', top: 0, zIndex: 1, backgroundColor: 'white' }}>
            <div class="header">Lone Star General Remodeling</div>
        </Header>
  );
  
}

export default MainHeader;
