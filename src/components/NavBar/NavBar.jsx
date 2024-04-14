import "./navbar.scss"
import CardWidget from "./CardWidget" 
import {Link} from "react-router-dom"


const NavBar = () => {

        

    return (
        <nav className="navbar">
            <Link to="/">
            <img className="logo-navbar " src="/img/logo.png" />
            </Link>

            <ul className="productos">
            <Link to="/category/remeras">Remeras</Link>
            <Link to="/category/pantalones">Pantalones</Link>
            <Link to="/category/buzos">Buzos</Link>
            <Link to="/category/zapatillas">Zapatillas</Link>
            </ul>
            <CardWidget/>
        </nav> 

        
    )
}
export default NavBar