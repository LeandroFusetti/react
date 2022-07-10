import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './CartWidget.css' 
const CartWidget = () => {
    const { getCount } = useContext(CartContext)

    const count = getCount()
    
    return (
        <div className={`${getCount() === 0 ? 'none' : 'carritoVisible'}`}>
            <Link to='/cart' style ={{display: "flex" ,flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
                <img src="./images/shopping-cart.png" alt="carrito-compras" weight = "50px" height="50px"/>
                { count }
            </Link>
        </div>
    )
}

export default CartWidget