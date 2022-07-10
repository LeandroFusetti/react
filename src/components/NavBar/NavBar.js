
import "./NavBar.css"
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
            <nav className ="gradiente">
                <div className="positionNavBar">
                    <div className= "postionLogo">
                        <Logo/>
                        <h1 className= "logo">ALL <span>GAMER</span></h1>
                    </div>
                    <div className= "navbar__div">
                      
                        <Link to='/categoria/sillasgamer'className='pestaña'>SILLAS GAMER</Link>
                        <Link to='/categoria/perifericos'className='pestaña'>PERIFERICOS</Link>
                        <Link to='/categoria/monitores'className='pestaña'>MONITORES</Link>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
    )
}

export default NavBar