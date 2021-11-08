import React from "react";
// import "../../App.css";
import "../OurTeam.css";
import OurTeamCard from "../OurTeamCard";
import { OurTeamCardDetails } from "../OurTeamCardDetails";

function OurTeam() {
  
  return (
    <>
      <div className="banner_for_our_team">
        <h1>OUR TEAM</h1>
      </div>
      <div className="our_team_dowm_paragraph">
        <h5>We are a group of enthusiastic technocrats from diverse backgroud who carry out grounding breaking research in multi-disciplinary domains and offer turnkey solutions to customers</h5>
      </div>
      <div className="our_team_body">
        <section>
          <div className="select_name_div">
              <h5><a href="#Mrityunjay">MRITYUNJAY SAHU</a></h5>
              <h5><a href="#Anudhyan">ANUDHYAN MISHRA</a></h5>
              <h5><a href="#Supratim">SUPRATIM DUTTA</a></h5>
              <h5><a href="#Sathinarayan">Dr. K SATHINARAYAN</a></h5>
              <h5><a href="#Murthy">MR. P V G K MURTHY</a></h5>
              <h5><a href="#Amit">PROF. AMIT KUMAR MISHRA</a></h5>
              <h5><a href="#Sunil">PROF. SUNIL MANOHAR DASH</a></h5>
              <h5><a href="#Sunita">PROF. SUNITA MISHRA</a></h5>
              <h5><a href="#Rahul">RAHUL JATHAR</a></h5>
              <h5><a href="#Sumit">SUMIT SAMAL</a></h5>
              <h5><a href="#Anish">ANISH AGARWAL</a></h5>
          </div>
          <div className="our_team_container">
            {OurTeamCardDetails.map((slide, index) => {
              return (
                <OurTeamCard
                  image={slide.image}
                  name={slide.name}
                  desc={slide.desc}
                  para={slide.para}
                  key={index}
                  id={slide.id}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default OurTeam;
