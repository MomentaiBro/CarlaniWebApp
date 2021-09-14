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
        <div>
            <nav>
                <div onClick={ToggleClass} className="hamburger"> 
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`navLinks ${isOpen ? "" : "open"}`}>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#">About</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#">Services</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#">Contact</a>
                    </li>
                    <li className={`${isFade ? "" : "fade"}`}>
                        <a href="#">Testimonials</a>
                    </li>

                </ul>
            </nav>

            <section className="landing">
                <img src="./circles.svg" alt="dots"/>
                <h1>Dots</h1>
            </section>
        </div>
    )
}

export default NavBar