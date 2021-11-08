import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import './Navbar.css'

function Navbar() {

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
                    <img src="	https://bariflo.teceads.co.in/images/logo.png" className="bariflolab-logo" alt="bariflo-logo"></img>
                    {/* <i className="fab fa-typo3"/> */}
                </Link>


                <div className="menu-icon" onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                
                {/* {button &&<Button buttonStyle='btn--outline'> SIGNUP</Button>} */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closedMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/products" className='nav-links' onClick={closedMobileMenu}>
                        PRODUCTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/ourteam" className='nav-links' onClick={closedMobileMenu}>
                            OUR TEAM
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contactus" className='nav-links' onClick={closedMobileMenu}>
                            CONTACT US
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
