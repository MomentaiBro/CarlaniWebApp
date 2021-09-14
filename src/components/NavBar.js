import { useState } from 'react';
// import NavStyle from '../modules/NavBar.module.css'

const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState('false');

    const ToggleClass = () => {
        setIsOpen(!isOpen)
        console.log(`${isOpen}`)
    }

    return (
        <div>
            <nav>
                <div onClick={ToggleClass} className="hamburger"> 
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`navLinks ${isOpen ? "" : "gay"}`}>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
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