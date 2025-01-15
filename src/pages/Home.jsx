import React from 'react'
import Header from '../components/Header'
import backgroundImage from '/src/assets/home_bg.png'; // Remplace le chemin par le bon

import Body from '../components/Body'
import Home_slider from '../components/home_slider';
import Meetteam from '../components/meetteam';
import Footer from '../components/Footer';

const Home = () => {
  const footerLinks = ["Salade", "FAQ", "Contact Us"];

  return (
    <div>
    <div className="bg-cover bg-center min-h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
<Header></Header>
<Body></Body>
</div>

 <div>
<Home_slider/> </div>

<div>
    <Meetteam></Meetteam>
</div>
<div>
  <Footer links={footerLinks}></Footer>
</div>
    </div>
    
  )
}

export default Home