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
import Contact from './components/Contact';
import LVT from './components/LVT';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Commercial from './components/Commercial';
import House from './components/House';
import GC from './components/GC';

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
            <Route path="/" element={<Home/>}></Route>
            <Route path="/portfolio/" element={<Portfolio/>}></Route>
            <Route path="/about/" element={<About/>}></Route>
            <Route path="/contact/" element={<Contact/>}></Route>
            <Route path="/lvt-flooring-installation/" element={<LVT/>}></Route>
            <Route path="/kitchen-remodeling/" element={<Kitchen/>}></Route>
            <Route path="/bathroom-remodeling/" element={<Bathroom/>}></Route>
            <Route path="/commercial-remodeling/" element={<Commercial/>}></Route>
            <Route path="/house-renovations/" element={<House/>}></Route>
            <Route path="/general-contractor-houston/" element={<GC/>}></Route>
          </Routes> 
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#C00A30', color: 'white'}}><b>Lone Star General Remodeling</b></Footer>
      </Layout>
    </Router>
  );
  
}

export default App;
