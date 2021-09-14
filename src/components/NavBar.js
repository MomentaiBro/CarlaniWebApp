import NavStyle from '../modules/NavBar.module.css'

const NavBar = () => {

    return (
        <div>
            <nav>
                <div className={NavStyle.hamburger}> 
                    <div className={NavStyle.line}></div>
                    <div className={NavStyle.line}></div>
                    <div className={NavStyle.line}></div>
                </div>
                <ul className={NavStyle.navLinks}>
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

            <section className={NavStyle.landing}>
                <img src="./circles.svg" alt="dots"/>
                <h1>Dots</h1>
            </section>
        </div>
    )
}

export default NavBar