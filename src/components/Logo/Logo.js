import { Link } from "react-router-dom"
const Logo = () => {
    return (
        <div>
            <Link to='/'className='"logoNombre"'>
                <img src="./images/minecraft.png" alt="logo-minecraft" weight = "50px" height="50px"></img>
            </Link> 
        </div>
    )
}

export default Logo 