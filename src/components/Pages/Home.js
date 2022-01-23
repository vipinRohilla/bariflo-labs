import React from "react";
import "../../App.css";
import Body from "../Body";
import Cards from "../Cards";
import "../CSS/Home.css";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
    <Navbar first="HOME" second="OUR TEAM" third="CONTACT US" firstlink="/" secondlink = "/ourteam" thirdlink="/contactus"/>
      <Body />
      <div className="about_company section-spacing">
        <div className="about_overlay">
          <div className="about_container">
            <div className="about_row">
              <div className="about_text">
                <div className="about_theme_title_one">
                  <h2>OUR VISION</h2>
                  <hr />
                </div>
                <p className="our_vision_para">
                  Aspire to be market leader in water body management in the
                  direction of aquafarming by Focusing on employment generation
                  &amp; creation of wealth by leveraging developed technology
                  utilising surface water reserve.
                </p>
                <h3 className="mission">
                  Mission is about people
                </h3>
                <p className="our_mission_para">
                  Develop sustainable technology and processes for aquaculture
                  farming by solving critical water issues and disease issues
                  which will benifit traditional to institutional farming.
                </p>
              </div>
              <div className="about_video">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/9Z3kDQ0OCCo"
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      
      <div className="callout-banner section-spacing">
        <div className="clearfix">
          <div className="title_div">
            <h3 className="title">
              Provide solutions for the realiable growth
            </h3>
          </div>
          <div className="white_line"></div>
          <div className="paragraph_div">
            <p className="paragraph">
              Bariflo Labs is an industry 4.0 compliant startup has developed
              water body management system based on Fluid dynamics, IOT,
              robotics, AI for aqua-farm management, urban water-body
              management. We offer technological solution for
              aquafarmers,co-operatives,villages,communities,cities &amp;
              industries at a variety of scales.Due to detachment of society on
              surface water bodies such as ponds, lakes, estuaries and
              overexploitation of groundwater due to agricultural, industry
              activities have created critical water stress on urban and rural
              civilization. We, at Bariflo Labs, are solving the water quality
              degradation of lakes, reservoirs by developing a profitable
              socio-technological business model by implementing robotic
              technology developed using the concept of environmental
              hydraulics, Ai, IoT and upgrading traditional methods.
            </p>
          </div>
        </div>
      </div>
      

      <div className="three_icons_div">
        <div className="hand-holding-heart">
          <i
            aria-hidden="true"
            className="fas fa-hand-holding-heart fa-3x "
          ></i>
          <h3>Carp Health Management</h3>
        </div>

        <div className="water">
          <i aria-hidden="true" className="fas fa-water fa-3x"></i>
          <h3>Sedimention Aeration</h3>
        </div>

        <div className="recycle">
          <i aria-hidden="true" className="fas fa-recycle fa-3x"></i>
          <h3>Recycling</h3>
        </div>
      </div>

      {/* <div className="about_company section-spacing">
        <div className="about_overlay">
          <div className="about_container">
            <div className="about_row">
              <div className="about_text">
                <div className="about_theme_title_one">
                  <h2>OUR VISION</h2>
                  <hr />
                </div>
                <p className="our_vision_para">
                  Aspire to be market leader in water body management in the
                  direction of aquafarming by Focusing on employment generation
                  &amp; creation of wealth by leveraging developed technology
                  utilising surface water reserve.
                </p>
                <h3 className="mission">
                  Mission is about people not projects
                </h3>
                <p className="our_mission_para">
                  Develop sustainable technology and processes for aquaculture
                  farming by solving critical water issues and disease issues
                  which will benifit traditional to institutional farming.
                </p>
              </div>
              <div className="about_video">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/9Z3kDQ0OCCo"
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="support_grid">
        <div className="support_heading">
          <h1>OUR SUPPORT SYSTEM</h1>
        </div>
        <div className="support_paragraph">
          <p>Our project are supported by startup odhisha</p>
        </div>
        <div className="support_grid_image">
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/dbt-birac-logo-image2-300x148.png"
              alt="birac-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/dlabs_Logo.png"
              alt="dlabs-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/iifsa.png"
              alt="iifsa-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/MEITY-150x150.jpg"
              alt="meity-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/t-hub.jpg"
              alt="t-hub-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/Screenshot-2020-06-17-at-9.14.53-PM-150x150.png"
              alt="ss-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/startuplogo-300x176.png"
              alt="startup-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/Logo-271x300.png"
              alt="logo-logo"
            ></img>
          </div>
          <div className="support_images">
            <img
              src="https://bariflo.teceads.co.in/images/LogoKIITTBI-1-150x150.png"
              alt="kiitbi-logo"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
