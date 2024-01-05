// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import '../index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography, Dropdown } from 'antd';
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

const items = [
  {
    key: '/lvt-flooring-installation/',
    label: (
      <Menu.Item key="/lvt-flooring-installation/" label="LVT">
        <div>LVT</div>
        <Link to="/lvt-flooring-installation/" />
      </Menu.Item>
    ),
  },
  {
    key: '/kitchen-remodeling/',
    label: (
      <Menu.Item key="/kitchen-remodeling/" label="Kitchen-Remodeling">
        <div>Kitchen Remodeling</div>
        <Link to="/kitchen-remodeling/" />
      </Menu.Item>
    ),
  },
  {
    key: '/bathroom-remodeling/',
    label: (
      <Menu.Item key="/bathroom-remodeling/" label="Bathroom-Remodeling">
        <div>Bathroom Remodeling</div>
        <Link to="/bathroom-remodeling/" />
      </Menu.Item>
    ),
  },
  {
    key: '/commercial-remodeling/',
    label: (
      <Menu.Item key="/commercial-remodeling/" label="Commercial-Remodeling">
        <div>Commercial Remodeling</div>
        <Link to="/commercial-remodeling/" />
      </Menu.Item>
    ),
  },
  {
    key: '/house-renovations/',
    label: (
      <Menu.Item key="/house-renovations/" label="House-Renovations">
        <div>House Renovations</div>
        <Link to="/house-renovations/" />
      </Menu.Item>
    ),
  },
  {
    key: '/general-contractor-houston/',
    label: (
      <Menu.Item key="/general-contractor-houston/" label="General-Contractor-Houston">
        <div>General Contractor</div>
        <Link to="/general-contractor-houston/" />
      </Menu.Item>
    ),
  }
];


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
            <Dropdown menu={{
              items,
            }}>
              <Menu.Item key="/contact/" label="Contact">
                  <div>Services</div>
              </Menu.Item>
            </Dropdown>
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