import NavStyle from '../modules/NavBar.module.css'

const NavBar = () => {

    return (
        <nav>
            <div className="hamburger"> 
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="navLinks">
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
    )
}

export default NavBar