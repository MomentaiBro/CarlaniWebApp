import NavStyle from '../modules/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
    <div className={NavStyle.NavBar}>
        <img src="Logo.png" alt="Carlani Logo" className={NavStyle.logo}/>
        <ul className={NavStyle.NavList}>
            <li>
                <NavLink to="/" exact className={ NavStyle.link } activeClassName={ NavStyle.active}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={ NavStyle.link } activeClassName={ NavStyle.active}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/services" className={ NavStyle.link } activeClassName={ NavStyle.active}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={ NavStyle.link } activeClassName={ NavStyle.active}>
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default NavBar