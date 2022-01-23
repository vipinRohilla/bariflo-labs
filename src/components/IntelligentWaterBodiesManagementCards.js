import React from 'react'

function IntelligentWaterBodiesManagementCards(props) {
    return (
        <div>
            <div className='Intelligent-water-bodies-management-products-container'>
                <div className='Intelligent-water-bodies-management-products-heading'>
                    <h1>{props.heading}</h1>
                </div>

                <div className='Intelligent-water-bodies-management-products-image-box'>
                    <img src={props.image} alt='aeration-system'/>
                </div>

                <div className='Intelligent-water-bodies-management-products-information'>
                    <h1>{props.information}</h1>
                </div>

                <div className='Intelligent-water-bodies-management-products-bullet-points-box'>
                    <div>

                    
                    <ul className='Intelligent-water-bodies-management-products-bullet-points'>
                        <li>
                        {props.firstpoint}
                        </li>
                        <li>
                        {props.secondpoint}
                        </li>

                        {
                            props.thirdpoint === "" ? " " :<li>
                            {props.thirdpoint}
                            </li>
                        }
                        

                        {
                            props.fourthpoint === "" ? " " : <li>
                            {props.fourthpoint}
                            </li>
                        }
                        

                        {
                            props.fifthpoint === "" ? " " : <li>
                            {props.fifthpoint}
                            </li>
                        }
                        
                        
                        {
                            props.sixthpoint === "" ? " " :
                            <li>
                        {props.sixthpoint}
                        </li>
                        }
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntelligentWaterBodiesManagementCards
