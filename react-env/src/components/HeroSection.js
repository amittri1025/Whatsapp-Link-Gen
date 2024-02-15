import React, { useEffect } from "react";
import phoneSVG from "../images/phone.svg";
function HeroSection() {
  useEffect(() => {
    const rockBtn = document.getElementById("rockBtn");
    //scroll over the button click
    if (rockBtn) {
      rockBtn.addEventListener("click", () => {
        window.scrollTo(0, 400);
      });
    }
  }, []);

  return (
    <section class="bg-success hero-section text-light p-5 text-center text-sm-start d-flex justify-content-center">
      <div class="container w-75 offset-* position-relative">
        <div class="d-flex align-items-center justify-content-between ">
          <div>
            <h1 class="fw-normal">
              Create{" "}
              <span class="text-warning ">
                <br />
                Whatsapp Links
              </span>
            </h1>
            <p class="lead my-4 fw-normal">
              Best Website to create Whatsapp Links
            </p>
            <p class="lead my-4 fw-normal">
              Skip the hassle of saving the number <br /> Message directly
              through our website.
              <br />
              We're just a click away!
            </p>
            <button class="shadow-hover btn btn-light btn-lg " id="rockBtn">
              Let's Rock
            </button>
          </div>
          <img
            class="img-fluid hero-image d-none d-lg-block pt-3 position-absolute end-0 top-0 w-50"
            src={phoneSVG}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
