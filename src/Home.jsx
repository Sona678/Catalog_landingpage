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


export default Home;