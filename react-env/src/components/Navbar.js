import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/" >WaLinkGen</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
{/*                 
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign-up</a>
                </li> --> */}
                <button id="toggleMode" class="btn btn-outline-success col-1 col-lg-5 d-flex justify-content-center align-items-center rounded-circle">
                  <i class="fa-regular fa-sun"></i>
                </button>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar
