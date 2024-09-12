// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Campaigns from './components/Campaigns';
import Feature from './components/Feature';
import Who from './components/Who';
import News from './components/News';
import Resources from './components/Resources';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Campaigns />
      <Feature/>
      <Who/>
      <News/>
      <Resources/>
      <Form/>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
