import React from 'react'
import ProductWebPage from '../ProductWebPage'
import Navbar from '../Navbar';
import '../CSS/IntelligentWaterBodiesManagement.css'

function IntelligentWaterBodiesManagement() {

    const heading = "Intelligent Water Bodies Management";
    const image = "https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg";
    // const description = "Our patented sediment aeration device diffuses air at the sediment level where the majority of waste and aquatic species shelter and helps in maintaining dissolved oxygen at sediment oxygen boundary layer. It reduces the energy consumption upto 75% and capital cost by 20%. Our cost effective AI based monitoring device will provide data at various places across the waterbody along the water column and sediment water interface to identify practical problems, which existing technologies are devoid of. It can predict water quality parameters such as dissolved oxygen, un-ionized ammonia, phosphate, nitrite, nitrate, sulphide, pH and ORP.Our intelligent data analytics portal predicts issues at the water column starting from sediment and guide monitoring devices to activate aeration and monitoring processes. Our intelligent floating agriculture platform provides phytoremediation by taking out the majority of nitrogen, phosphorus content and reduces the growth of algae and water weeds.";
    const description =  " ";
    return (
        <>
        {/* <Navbar first="PRODUCT" second="BLOG" third="DEMO"/> */}
        <Navbar first="PRODUCT" second="BLOG" third="DEMO" firstlink="/IntelligentWaterbodiesManagementProducts" secondlink = "/IntelligentWaterbodiesManagementBlog" thirdlink="/IntelligentWaterbodiesManagementDemo"/>
        <ProductWebPage heading={heading} image={image} description={description}/>
        <div className="Rejuvenation_of_water_bodies">
            <div className='Rejuvenation-left-box'>
                    <h1>What is Rejuvenation of water bodies?</h1>
            </div>
            <div className='Rejuvenation-right-box'>
                <h4>
                Rejuvenation of water bodies makes the meaning of restoration of biodiversity of the waterbody through knowledge of the system processes which includes an estimate of the natural productivity of the target system, the human health aspects. The knowledge of the system process requires integration of descriptive field monitoring and laboratory/field experimentation with an emphasis on comprehensive, long-term scientific observation of the system processes. Ecosystem level questions should be based on multiple sequences of temporal interactions at various levels of biological organization. 
                </h4>
            </div>
        </div>
        <hr/>
        <div className="Restoration_of_water_bodies">
            <div className='Restoration-right-box'>
                <h4>
                The restoration of water bodies means bringing back the biodiversity of the original system, that is the state of the fisheries potential (past and present), and the possibilities for enhancement of aesthetic qualities of the natural ecosystem. 
                </h4>
            </div>
            <div className='Restoration-left-box'>
                    <h1>What is Restoration of water bodies?</h1>
            </div>
        </div>

        <div className='Ecosystem-before-industrial-revolution'>
            <div className='Ecosystem-before-industrial-revolution-heading'>
                <h1>Ecosystem before industrial revolution</h1>
            </div>
            <div className='Ecosystem-before-industrial-revolution-image-box'>
                <div className='Ecosystem-before-industrial-revolution-image'>
                    <img src= {require('../images/ecosystemBefore.png').default} alt='ecosystem'/> 
                    <img src= {require('../images/ecosystemBeforeDiagram.png').default} alt='ecosystem'/>
                </div>
                {/* <div>

                </div> */}
            </div>
        </div>

        {/* <div className='Ecosystem-before-industrial-revolution'>
            <div className='Ecosystem-before-industrial-revolution-heading'>
                <h1>Ecosystem before industrial revolution</h1>
            </div>
            <div className='Ecosystem-before-industrial-revolution-Diagram-image-box'>
                <div className='Ecosystem-before-industrial-revolution-Diagram-image'>
                    <img src= {require('../images/ecosystemBeforeDiagram.png').default} alt='ecosystem'/>
                </div>
            </div>
        </div> */}
        <hr/>
        <div className='Ecosystem-after-industrial-revolution'>
            <div className='Ecosystem-after-industrial-revolution-heading'>
                <h1>Ecosystem After industrial revolution</h1>
            </div>
            <div className='Ecosystem-after-industrial-revolution-image-box'>
                <div className='Ecosystem-after-industrial-revolution-image'>
                    <img src= {require('../images/ecosystemAfter.png').default} alt='ecosystem'/> 
                    <img src= {require('../images/ecosystemAfterDiagram.png').default} alt='ecosystem'/> 
                </div>
                {/* <div>

                </div> */}
            </div>
        </div>

        {/* <div className='Ecosystem-after-industrial-revolution'>
            <div className='Ecosystem-after-industrial-revolution-heading'>
                <h1>Ecosystem After industrial revolution</h1>
            </div>
            <div className='Ecosystem-after-industrial-revolution-image-box'>
                <div className='Ecosystem-after-industrial-revolution-image'>
                    <img src= {require('../images/ecosystemAfterDiagram.png').default} alt='ecosystem'/> 
                </div>
            </div>
        </div> */}

            
        </>
    )
}

export default IntelligentWaterBodiesManagement
