import { useState } from "react";
import '../styles/Header.css'
import logo from '../assets/logo.svg'
import hamb from '../assets/icon-hamburger.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="wrapper">
            <div className="background"></div>
            <div className="svg-background"></div>
            <div className="content">
                <div className="Navbar">
                  <img src={logo} alt="" />
                  <div className='ham'>
                            <img src={hamb} alt="" onClick={toggleMenu}/>
                        </div>
                    <div className= { `side1 ${isMenuOpen ?  'show-menu' : ''} `}>
                        

                        <nav className="Nav-links">
                            <ul>
                                <li>
                                    <a href="">Product</a>
                                    <a href="">Company</a>
                                    <a href="">Connect</a>
                                </li>
                            </ul>
                        </nav>
                    <div className="side2">
                        <button className='btn-1'>Login</button>
                        <button className='btn-2'>Signup</button>

                    </div>
                    </div>

                </div>
                <div className="Hero">
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <div className="btn-hero">
                        <button className='btn-1'>Start for Free</button>
                        <button className='btn-2'>Learn More</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;