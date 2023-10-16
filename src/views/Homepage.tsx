import React from "react";
import{Link} from 'react-router-dom'

export default function Homepage() {
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <nav className="navbar navbar-expand-sm navbar-custom-color bg-custom-color">
            <a href="#" className="navbar-brand ">
              <img src="assets/imgs/logo.svg" className="img-logo" alt="" />
            </a>
            <button
              className="navbar-toggler hamburger_container"
              data-toggle="collapse"
              id="menu_btn_mobile"
              data-target="#"
            >
              <img src="assets/imgs/Humb.svg" alt="" />
            </button>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className=" navbar-nav nav justify-content-center">
                <li className="nav-item cs-nav-item">
                  <a className="nav-link cs-nav-link active " href="#">
                    Create CV
                  </a>
                </li>
                <li className="nav-item cs-nav-item">
                  <a className="nav-link cs-nav-link" href="#">
                    Jobs
                  </a>
                </li>
                <li className="nav-item cs-nav-item">
                  <a className="nav-link cs-nav-link" href="#">
                    Test
                  </a>
                </li>
                <li className="nav-item cs-nav-item">
                  <a className="nav-link cs-nav-link" href="#">
                    About Us
                  </a>
                </li>

                <li className="nav-item cs-nav-item">
                  <a className="nav-link cs-nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary btn-get"><Link to={"/Sign_in"}>Get Started</Link></button>
          </nav>

          <div className="menu-overlay"></div>
          <div className="menu_container menu_mm">
            <div className="menu_close_container">
              <div className="menu_close"></div>
            </div>

            <div className="menu_inner menu_mm">
              <div className="menu menu_mm">
                <ul className="menu_list menu_mm">
                  <li className="menu_item menu_mm">
                    <a href="#">Create CV</a>
                  </li>
                  <li className="menu_item menu_mm">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="menu_item menu_mm">
                    <a href="#">Test</a>
                  </li>
                  <li className="menu_item menu_mm">
                    <a href="about_us.html">About Us</a>
                  </li>
                  <li className="menu_item menu_mm">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" containter-fluid header-landing text-center">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h1 className="header-title">
                  Create a{" "}
                  <span className="header-highlight">job - winning CV</span>
                  <div>in only 5 minutes</div>
                </h1>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row text-center">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p className="header-info text-center">
                  Easily create an outstanding CV for different roles and
                  industries with less intervention to level up your career goal
                  and get hired by top firms.
                </p>

                <div className="header-btn ">
                  <button className="btn btn-primary btn-create">
                    Create CV
                  </button>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-2"></div>
              <div className="col-md-8  header-img">
                <img
                  src="assets/imgs/header.png"
                  className="img-header"
                  alt=""
                />
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </header>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h4 className="body-title  text-center">
                Start building your
                <span className="header-highlight">CV</span>
                <div>in 5 minutes</div>
              </h4>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-6 cl-pd">
              <div className="row">
                <div className="col-md-2 "></div>
                <div className="col-2 mt-2">
                  <span className="circle-num">01</span>
                  <div className="circle-line"></div>
                </div>
                <div className="col-8 mb-2">
                  <p>
                    <h1 className="cirle-head">Create CV</h1>
                    <span className="circle-body">
                      Create industry standard CV <br /> with your key skills,
                      <br /> experience etc.
                    </span>
                  </p>
                </div>

                <div className="col-md-2 "></div>
                <div className="col-2 mt-2">
                  <span className="circle-num">02</span>
                  <div className="circle-line"></div>
                </div>
                <div className="col-8 mb-2">
                  <p>
                    <h1 className="cirle-head">Add a subscription plan</h1>
                    <span className="circle-body">
                      Choose a subscription plan and pay using your debit card
                      or bank transfer.
                    </span>
                  </p>
                </div>

                <div className="col-md-2 "></div>
                <div className="col-2 mt-2">
                  <span className="circle-num">03</span>
                </div>
                <div className="col-8 mb-2">
                  <p>
                    {" "}
                    <h1 className="cirle-head">Get hired fast</h1>
                    <span className="circle-body">
                      Submit your CV and get hired <br /> fast by top firms.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 cl-mo-pd ">
              <div className="row">
                <div className="col-md-12 text-center mt-1 ">
                  <span className="circle-num">01</span>
                  <div className="circle-line-md"></div>
                  <div className="mt-5 pt-3">
                    <p>
                      {" "}
                      <h1 className="cirle-head">Create CV</h1>
                      <span className="circle-body">
                        Create industry standard CV with your key skills,
                        experience etc.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <span className="circle-num">02</span>
                  <div className="circle-line-md"></div>
                  <div className="mt-5 pt-3">
                    <p>
                      {" "}
                      <h1 className="cirle-head">Add a subscription plan</h1>
                      <span className="circle-body">
                        Choose a subscription plan and pay using your debit card
                        or bank transfer.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <span className="circle-num">03</span>
                  <div className="circle-line-md-3"></div>
                  <div className="mt-5 pt-2">
                    <p>
                      {" "}
                      <h1 className="cirle-head">Get hired fast</h1>
                      <span className="circle-body">
                        Submit your CV and get hired fast by top firms.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center ">
              <img
                src="assets/imgs/Captur 1.png"
                className="circle-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-blue pt-5 pb-4 ">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h4 className="body-title  text-center text-white">
                Choose from our professionally
                <div className="text-white">designed CV templates.</div>
              </h4>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-12 ">
              <section id="slider" className="pt-3">
                <div className="container-fluid">
                  <div className="slider">
                    <div className="owl-carousel choose-cv">
                      <div className="slider-card">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <img src="assets/imgs/slider/Capt 1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="slider-card">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <img src="assets/imgs/slider/Capt 1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="slider-card">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <img src="assets/imgs/slider/Capt 1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="slider-card">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <img src="assets/imgs/slider/Capt 1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="slider-card">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <img src="assets/imgs/slider/Capt 1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container mt-4 ">
          <div className="row mt-">
            <div className="col-md-6 b-cv-1">
              <img src="assets/imgs/pr.png width: 90% ;" alt="" />
            </div>
            <div className="col-md-6 mt-4  b-cv-2">
              <h4 className="body-title b-header">
                Build your job - winning
                <div className="">
                  <span className="header-highlight ">CV</span>
                  in minutes
                </div>
              </h4>

              <div className="mt-5">
                <div>
                  <h4 className="build-head">Easy to use</h4>
                  <div className="build-body">
                    <p>
                      Array of web based applications with features that allow
                      user to share and download created CVs.
                    </p>
                  </div>
                </div>
                <div className="build">
                  <h4 className="build-head">Access to template</h4>
                  <div className="build-body">
                    <p>
                      A vast CV template directory that provides exceptional
                      models to choose from and create outstanding CV in minute.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="build-head">Share and download</h4>
                  <div className="build-body">
                    <p>
                      Set of web-based applications that implements features
                      which allow its users easily, and with less human
                      intervention, create CVs for different job roles and
                      industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 ">
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h4 className="body-title  text-center">
                Testimonial
                <div className="pt-3">
                  <p className="font-size: 14px; font-weight: 100;">
                    Here’s what people say about our online resume creator.
                  </p>
                </div>
              </h4>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="owl-carousel carousel-owl ">
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item testimonial-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle mb-2 testimonial-card-sub ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-carousel carousel-owl2 ">
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h5>
                <h6 className="card-subtitle testimonial-card-sub mb-2 ">
                  Customer reviews
                </h6>
                <p className="card-text">
                  "Wow what great service, I love it! It's is the most valuable
                  business resource we have EVER purchased. We can't understand
                  how we've been living without it."
                </p>
                <p className="card-text text-right">15 May 2020 9:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-8 mb-3">
            <h4 className="body-title  text-center">
              Simple, Affordable
              <span className="header-highlight">Pricing</span>
              <div className="">
                <p className="font-size: 14px; font-weight: 100;">
                  Choose one of our Pro Plans and enjoy the benefits that come
                  with it
                </p>
              </div>
            </h4>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-3">
            <div className="card pt-3 pb-3">
              <div className="card-body">
                <h3 className="price-cate">Starter</h3>
                <h1 className="price">Free</h1>
                <button className="btn btn-primary price-btn text-center">
                  Use this Template
                </button>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 90 days
                  access{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 3 templates{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Unlimited
                  customization{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  PDF{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  Docx{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card pt-3 pb-3">
              <div className="card-body">
                <h3 className="price-cate">Classic</h3>
                <h1 className="price">
                  $15 <span className="price-sub">/ month</span>
                </h1>

                <button className="btn btn-primary price-btn text-center">
                  Use this Template
                </button>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 90 days
                  access{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 3 templates{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Unlimited
                  customization{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  PDF{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  Docx{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card pt-3 pb-3">
              <div className="card-body">
                <h3 className="price-cate">Premium</h3>
                <h1 className="price">
                  $50<span className="price-sub">/ month</span>
                </h1>

                <button className="btn btn-primary price-btn text-center">
                  Use this Template
                </button>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 90 days
                  access{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> 3 templates{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Unlimited
                  customization{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  PDF{" "}
                </div>
                <div className="price-desc">
                  <span className="fa fa-check price-icon"></span> Download as
                  Docx{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 banner">
            <img src="assets/imgs/BG.jpg" className="banner-img" alt="" />
            <div className="banner-content">
              <h1 className="text-center ">
                Create a CV that lands your dream job
              </h1>
              <div className="text-center">
                <p>
                  Start building the outstanding CV that will help you make your
                  next career move now.
                </p>
              </div>

              <div className="header-btn ">
                <button className="btn btn-primary btn-create">
                  Create CV
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-12 banner-mobile">
            <img src="assets/imgs/BGm.png" className="banner-img" alt="" />
            <div className="banner-content-m">
              <h1 className="text-center text-white  ">
                Create a CV that lands your dream job
              </h1>
              <div className="text-center text-white">
                <p>
                  Start building the outstanding CV that will help you make your
                  next career move now.
                </p>
              </div>

              <div className="header-btn text-center">
                <button className="btn btn-primary btn-create">
                  Create CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid mt-5 footer">
          <div className="row">
            <div className="col-md-5">
              <img
                src="assets/imgs/logo white.png"
                className="footer-img"
                alt=""
              />
            </div>
            <div className="col-md-2">
              <h5 className="footer-h1 font-weight-bold">Company</h5>
              <ul className="footer-ul">
                <li>
                  <a className="text-white text-decoration: none;" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-white text-decoration: none;" href="#">
                    About US
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-white text-decoration: none;" href="#">
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-6  ">
              <h5 className="text-light mb-4 font-weight-bold">Newsletter</h5>
              <p className="text-secondary">
                Subscribe to our newsletter to receive weekly updates about the
                best resume guide
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="bg-secondary mt-5 mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7">
              <p className="text-secondary">
                {" "}
                &copy; Revampinsights.All Right Reserved |
                support@revampinsights.com
              </p>
            </div>
            <div className="col-md-5 text-right social-ft">
              <a href="" className="footer-social">
                <span className="fa fa-linkedin"></span>
              </a>
              <a href="" className="footer-social">
                <span className="fa fa-twitter"></span>
              </a>
              <a href="" className="footer-social">
                <span className="fa fa-facebook"></span>
              </a>
              <a href="" className="footer-social">
                <span className="fa fa-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
