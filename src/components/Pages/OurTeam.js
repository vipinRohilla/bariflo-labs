import React from "react";
import "../CSS/OurTeam.css";
import NameTags from "../NameTags";
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
          {
          OurTeamCardDetails.map((slide, index)=>{
              var href = "#"+ slide.id;
                return (
                <NameTags href={href} name={slide.name} key={index}/>
                )
            })
          }

          </div>
          <div className="our_team_container">
            {
            OurTeamCardDetails.map((slide, index) => {
              return (
                <OurTeamCard
                  image={slide.image}
                  name={slide.name}
                  desc={slide.desc}
                  para={slide.para}
                  key={index}
                  id={slide.id}
                  href={slide.href}
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
