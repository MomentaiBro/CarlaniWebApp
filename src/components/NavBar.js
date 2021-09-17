import { useState } from 'react';
// import NavStyle from '../modules/NavBar.module.css'

const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState('false');
    const [ isFade, setFade] = useState('false')

    const ToggleClass = () => {
        setIsOpen(!isOpen)
        setFade(!isFade)
    }

    return (
        <div className="sticky">
            <nav>
                <div> 
                    Carlani
                </div>
                <div onClick={ToggleClass} className="hamburger"> 
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                
                <ul className={`navLinks ${isOpen ? "" : "open"}`}>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#about">About</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#services">Services</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#testimonials">Testimonials</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar