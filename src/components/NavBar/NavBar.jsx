import "./navbar.scss"
import CardWidget from "./CardWidget" 
const NavBar = () => {

        

    return (
        <nav className="navbar">
            <img className="logo-navbar " src="/img/logo.png" />

            <ul className="productos">
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Buzos</li>
            <li>Zapatillas</li>
            </ul>
            <CardWidget/>
        </nav>

        
    )
}
export default NavBar