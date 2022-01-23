import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import './CSS/Navbar.css'
import "./images/logo.png"

function Navbar(props) {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton()
    // }, []);

    // window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closedMobileMenu}>
                <span>Bariflo Labs</span>
                    <img src={require('./images/logo1.png').default}  className="bariflolab-logo" alt="bariflo-logo"/>
                    {/* <i className="fab fa-typo3"/> */}
                </Link>


                <div className="menu-icon" onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                
                {/* {button &&<Button buttonStyle='btn--outline'> SIGNUP</Button>} */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to = {props.firstlink} className='nav-links' onClick={closedMobileMenu}>
                            {props.first}
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to="/products" className='nav-links' onClick={closedMobileMenu}>
                        PRODUCTS
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to= {props.secondlink} className='nav-links' onClick={closedMobileMenu}>
                            {props.second}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= {props.thirdlink} className='nav-links' onClick={closedMobileMenu}>
                            {props.third}
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to="/pricing" className='nav-links' onClick={closedMobileMenu}>
                            PRICING
                        </Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link to="/signup" className='nav-links-mobile' onClick={closedMobileMenu}>
                            Sign up
                        </Link>
                    </li> */}

                </ul>
        </nav>
        </>
    )
}

export default Navbar
