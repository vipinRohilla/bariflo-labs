import React from 'react'
import "./CSS/ProductWebPage.css"

function ProductWebPage(props) {
    return (
        <>
            <div className="product_container">
                <div className="product_heading">
                    <h1>{props.heading}</h1>
                </div>
                <div className="product_second_container">
                    {/* <div className="product_image_container">
                        <img src={props.image} alt="water_body"/>
                    </div> */}
                    <div className="product_description">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductWebPage
