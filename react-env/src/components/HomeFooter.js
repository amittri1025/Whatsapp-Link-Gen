import React from 'react'
import { useNavigate } from "react-router-dom";

function HomeFooter() {
  let navigate = useNavigate();

  return (
    <div class="footer text-center bg-dark text-white p-5 pb-2">

    <p class="fw-normal">Visit Our Website Regularly for best Web Apps</p>
    <div class="d-flex align-items-center justify-content-center">
      <a href="/" class="btn btn-light mx-2 shadow-hover">About Us</a>
      {/* TODO: fix interlinking */}
      <a href="/contact" class="btn btn-light mx-2 shadow-hover">Contact Us</a>
    </div>

    <div class="p-4">
      <a href="https://twitter.com/tdevamit" class="text-white my-5 mx-2 h3"><i class="bi bi-twitter"></i></a>
      <a href="https://www.linkedin.com/in/amit-tripathi-607240202/" class="text-white my-5 mx-2 h3"><i
          class="bi bi-linkedin"></i></a>
      <a href="https://github.com/amittri1025/Whatsapp-Link-Gen" class="text-white my-5 mx-2 h3"><i
          class="bi bi-github"></i></a>
    </div>
  </div>
  )
}

export default HomeFooter
