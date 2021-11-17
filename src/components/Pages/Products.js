import React from "react";
import "../../App.css";
import ProductCard from "../ProductCard";
import { ProductCardDetails } from "../ProductCardDetails";
import "../CSS/Products.css";

function Products() {
  return (
    <>
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
