import React from "react";

export default () => (
  <header className="header-area">
    <div className="navbar-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="/assets/images/logo.svg" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#facts">
                      Why
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <a className="main-btn" data-scroll-nav="0" href="#pricing">
                  Free Trial
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div
      id="home"
      className="header-hero bg_cover"
      style={{backgroundImage: 'url(assets/images/banner-bg.svg)'}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="header-hero-content text-center">
              <h3
                className="header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Basic - SaaS Landing Page
              </h3>
              <h2
                className="header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                Kickstart Your SaaS or App Site
              </h2>
              <p
                className="text wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </p>
              <a
                href="#"
                className="main-btn wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1.1s"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="header-hero-image text-center wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="1.4s"
            >
              <img src="/assets/images/header-hero.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
      <div id="particles-1" className="particles"></div>
    </div>
  </header>
);
