import React from 'react'
import phoneSVG from '../images/phone.svg'

const ContactHero = () => {
  return (
    <div class="hero">
    <div class="hero-text"><p>Contact Us</p></div>
    <div class="hero-img">
        <img src={phoneSVG}/>
        <div class="contact-container">
            <a href="https://www.instagram.com/amittripathei/"  style={{"text-decoration" : "none"}}><div class="box"><i class="fa-brands fa-instagram" ></i><p>Instagram</p></div></a>
            <a href="https://twitter.com/tdevamit" style={{"text-decoration" : "none"}}><div class="box"><i class="fa-brands fa-x-twitter" ></i><p>X</p></div></a>
            <a href="https://www.linkedin.com/in/tripathiamit10?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADOl_2cBjOZt0qdCM0IUScKMkDhe6YvE3dA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B0k1XnEhTSByGMcgfky%2FPZA%3D%3D" style={{"text-decoration" : "none"}}><div class="box"><i class="fa-brands fa-linkedin-in"></i><p>LinkedIn</p></div></a>
            <a href="https://github.com/amittri1025" style={{"text-decoration" : "none"}}><div class="box"><i class="fa-brands fa-github"></i><p>GitHub</p></div></a>
          </div>
    </div>
</div>
  )
}

export default ContactHero
