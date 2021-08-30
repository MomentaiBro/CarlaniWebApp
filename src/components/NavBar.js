import NavStyle from '../modules/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
    <div className={NavStyle.NavBar}>
        <ul className={NavStyle.NavList}>
            <li>
                <NavLink to="/" exact className={ NavStyle.link } activeClassName={ NavStyle.activeHome}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={ NavStyle.link } activeClassName={ NavStyle.activeAbout}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/services" className={ NavStyle.link } activeClassName={ NavStyle.activeServices}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={ NavStyle.link } activeClassName={ NavStyle.activeContact}>
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default NavBar