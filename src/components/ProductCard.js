import React from 'react'

function ProductCard(props) {
    return (
        <>
            <div className="card">
                    <div className="content">
                        <h2>{props.heading}</h2>
                        <div className="container_for_image">
                            <img src={props.image} alt="bariflo"/>

                        </div>
                        {/* <h3>card one</h3> */}
                        <div className="container_for_paragraph">
                            <h1>{props.title}</h1>
                            <br/>
                        <p>
                        {props.para}
                        </p>
                        </div>
                        
                        {/* <a href="#"> Read more</a> */}
                    </div>
                </div>
        </>
    )
}

export default ProductCard
