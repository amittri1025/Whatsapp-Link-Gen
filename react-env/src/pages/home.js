import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MainBody from '../components/MainBody';
import HomeFooter from '../components/HomeFooter';
import CopyrightFooter from '../components/CopyrightFooter';
import { useEffect } from 'react';
import '../App.css';

function Home() {

    useEffect(() => {
        const b2t = document.getElementById('back-to-top');
        
        if (b2t) { // Check if the element exists
          b2t.addEventListener('click', () => {
            window.scrollTo(0, 0);
          });
    
          window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
              b2t.classList.add('show');
            } else {
              b2t.classList.remove('show');
            }
          });
        }
      }, []);

  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <MainBody/>
    {/* Added Button to go to top of page  */}
     <div id="back-to-top">
       <i className="fa-solid fa-chevron-up"></i>
     </div>

   
   <HomeFooter/>
   <CopyrightFooter/>
 </div>

  )
}

export default Home
