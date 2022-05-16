import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return(
            <nav className ="gradiente">
                <div className="posicionamiento">
                    <CartWidget/>
                    <h1 className= "logo">ALL <span>GAMER</span></h1>
                    <div className= "navbar__div">
                        <button>JUEGOS</button>
                        <button>DLC</button>
                        <button>JUEGOS GRATUITOS</button>
                        <button>COLECCIONES</button>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar