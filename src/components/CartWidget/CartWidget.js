import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    const { getCount } = useContext(CartContext)

    const count = getCount()
    return (
        <Link to='/cart' style ={{display: "flex" ,flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
            <img src="./images/shopping-cart.png" alt="carrito-compras" weight = "50px" height="50px"/>
           {/*  <p style={{fontSize: "30px", padding: "0 20px", fontWeight: "900"}}>0</p> */}
           { count }
        </Link>
    )
}

export default CartWidget