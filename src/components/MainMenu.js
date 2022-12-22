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


function MainMenu() {

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
            defaultSelectedKeys={['1']}
            selectable="true"
            style={{backgroundColor: 'white', border: '1px solid black', fontFamily: "Arial Rounded MT Bold", borderRadius: '10px', width: '50%', display: 'flex', justifyContent: 'center'}}>
            <Menu.Item key="1" label="Home">
                <div>Home</div>
                <Link to="/web/" />
            </Menu.Item>
            <Menu.Item key="2" label='Portfolio'>
                <div>Portfolio</div>
                <Link to="/web/portfolio" />
            </Menu.Item>
            <Menu.Item key="3" label="About">
                <div>About</div>
                <Link to="/web/about"/>
            </Menu.Item>
            <Menu.Item key="4" label="Contact">
                <div>Contact</div>
                <Link to="/web/contact" />
            </Menu.Item>
        </Menu>
    </div>
  );
  
}

export default MainMenu;