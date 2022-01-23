import React from 'react'
import ProductWebPage from '../ProductWebPage';
import Navbar from '../Navbar';

function IntelligentAquaBodiesManagement() {
    const heading = "Intelligent Aqua Bodies Management";
    const image = "https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg";
    const description = "Our patented sediment aeration device diffuses air at the sediment level where the majority of waste and aquatic species shelter and helps in maintaining dissolved oxygen at sediment oxygen boundary layer. It reduces the energy consumption upto 75% and capital cost by 20%. Our cost effective AI based monitoring device will provide data at various places across the waterbody along the water column and sediment water interface to identify practical problems, which existing technologies are devoid of. It can predict water quality parameters such as dissolved oxygen, un-ionized ammonia, phosphate, nitrite, nitrate, sulphide, pH and ORP.Our intelligent data analytics portal predicts issues at the water column starting from sediment and guide monitoring devices to activate aeration and monitoring processes. Our intelligent floating agriculture platform provides phytoremediation by taking out the majority of nitrogen, phosphorus content and reduces the growth of algae and water weeds.";
    return (
        <>
            {/* <Navbar first="PRODUCT" second="BLOG" third="DEMO"/> */}
            <Navbar first="PRODUCT" second="BLOG" third="DEMO" firstlink="/IntelligentAquabodiesManagementProducts" secondlink = "/IntelligentAquabodiesManagementBlog" thirdlink="/IntelligentAquabodiesManagementDemo"/>
            <ProductWebPage heading={heading} image={image} description={description}/>
        </>
    )
}

export default IntelligentAquaBodiesManagement
