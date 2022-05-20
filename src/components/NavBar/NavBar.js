
import "./NavBar.css"
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return(
            <nav className ="gradiente">
                <div className="positionNavBar">
                    <div className= "postionLogo">
                        <Logo/>
                        <h1 className= "logo">ALL <span>GAMER</span></h1>
                    </div>
                    <div className= "navbar__div">
                        <button>JUEGOS</button>
                        <button>SILLAS GAMER</button>
                        <button>PERIFERICOS</button>
                        <button>MONITORES</button>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
    )
}

export default NavBar