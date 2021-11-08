import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
      <>
      <div className="cards_upper_part">
        <h1>Our Story</h1>
        <p className="long__paragraph">
          Bariflo Labs is an industry 4.0 compliant startup has developed water
          body management system based on Fluid dynamics, IOT, robotics, AI for
          aqua-farm management, urban water-body management. We offer
          technological solution for aquafarmers, co-operatives, villages,
          communities, cities & industries at a variety of scales.{" "}
        </p>
      </div>
    <div className="cards">
      
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              // src = {require("./images/img-7.jpg").default}
              src="https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg"
              text="Water Body Rejuvenation"
              label="Click me"
              path="/services"
            />
            <CardItem
              // src = {require("./images/img-7.jpg").default}
              src="https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg"
              text="Aqua Culture"
              label="Click me"
              path="/services"
            />
            <CardItem
              // src = {require("./images/img-7.jpg").default}
              src="https://bariflolabs.com/wp-content/uploads/2019/10/blog-ww-1.jpg"
              text="Water Body Rejuvenation"
              label="Click me"
              path="/services"
            />
            <CardItem
              // src = {require("./images/img-7.jpg").default}
              src="https://bariflolabs.com/wp-content/uploads/2019/10/blog-ww-1.jpg"
              text="Water Body Rejuvenation"
              label="Click me"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
