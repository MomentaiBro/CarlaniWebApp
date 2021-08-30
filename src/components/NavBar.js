import NavStyle from '../modules/NavBar.module.css'

const NavBar = () => {

    return (
    <div className={NavStyle.NavBar}>
        <img src="Logo.png" alt="Carlani Logo" className={NavStyle.logo}/>
        <ul className="NavList">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
    </div>
    )
}

export default NavBar