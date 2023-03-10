// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import loneStarLogo from '../assets/images/lonestarlogo.jpeg'
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";


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


function MainMenu() {

  let location = useLocation();
  let menu = ['Home', 'Portfolio', 'About', 'Contact']

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div class="menu">
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            selectable="true"
            style={{backgroundColor: 'white', border: 'none', fontFamily: "Arial Rounded MT Bold", borderRadius: '10px', width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Menu.Item key="/" label="Home">
                <div>Home</div>
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="/portfolio/" label='Portfolio'>
                <div>Portfolio</div>
                <Link to="/portfolio/" />
            </Menu.Item>
            <Menu.Item key="/about/" label="About">
                <div>About</div>
                <Link to="/about/"/>
            </Menu.Item>
            <Menu.Item key="/contact/" label="Contact">
                <div>Contact</div>
                <Link to="/contact/" />
            </Menu.Item>
        </Menu>
    </div>
  );
  
}

export default MainMenu;