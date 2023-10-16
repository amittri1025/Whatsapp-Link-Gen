import React from 'react'
import '../contact.css';
import ContactNavbar from '../components/ContactNavbar';
import ContactHero from '../components/ContactHero';
import ContactFooter from '../components/ContactFooter';

function contact() {
  return (
    <div className='backbone'>
      <ContactNavbar/>
      <ContactHero/>
      <ContactFooter/>
    </div>
  )
}

export default contact
