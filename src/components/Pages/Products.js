import React from "react";
import "../../App.css";
import ProductCard from "../ProductCard";
import { ProductCardDetails } from "../ProductCardDetails";
import "../CSS/Products.css";
import Navbar from "../Navbar";

function Products() {
  return (
    <>
    {/* <Navbar first="HOME" second="OUR TEAM" third="CONTACT US"/> */}
    <Navbar first="HOME" second="OUR TEAM" third="CONTACT US" firstlink="/" secondlink = "/ourteam" thirdlink="/contactus"/>
      <div className="products"></div>
      {/* <body> */}
      <div className="body">
        <div className="body_container">
          <div className="container">
            {ProductCardDetails.map((slide, index) => {
              return (
                <ProductCard
                  heading={slide.heading}
                  para={slide.para}
                  image={slide.image}
                  title={slide.title}
                  key={index}
                />
              );
            })}
          </div>
          {/* </body> */}
        </div>
      </div>
    </>
  );
}

export default Products;
