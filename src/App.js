import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Carousel, Typography } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainHeader from "./components/MainHeader"
import MainMenu from "./components/MainMenu"
import Home from "./components/Home"
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact'

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


function App() {

  let menu = ['Home', 'Portfolio', 'About', 'Contact']

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Router>  
      <Layout style={{backgroundColor: 'white'}}>
        <MainHeader/>
        <MainMenu/>
        <Content className="site-layout">
          <Routes>
            <Route path="/web/" element={<Home/>}></Route>
            <Route path="/web/portfolio/" element={<Portfolio/>}></Route>
            <Route path="/web/about/" element={<About/>}></Route>
            <Route path="/web/contact/" element={<Contact/>}></Route>
          </Routes> 
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: 'white'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
  
}

export default App;
