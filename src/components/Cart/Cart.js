import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart =() => {

    const {cart, borrarItem, borrarCarrito, costoTotal, getCount } = useContext (CartContext)
    
    if (getCount()  === 0) {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
                <h2 className="carrito">No hay productos en el carrito</h2>
                <Link to="/">
                    <button className="botonAccion">Volver atras</button>
                </Link>
            </div>
        )
    }


    return(
        
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 className='carrito'>Carrito</h1>
            <div >
                <div className='tabla'>
                            <p >Nombre</p>
                            <p>Cantidad </p>
                            <p>Precio x Unidad</p>
                            <p>Subtotal:</p>
                </div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className='cart' >
                            <img src= {prod.foto} width='100px' alt={prod.nombre}/>
                            <p style={{width:'300px'}}>{prod.nombre}</p>
                            <p>{prod.count}</p>
                            <p>${prod.precio}</p>
                            <p>${prod.precio * prod.count}</p>
                            <button className= 'botonAccion'onClick={() => borrarItem(prod.id)}>X</button>
                            
                        </div>
                    )})
                }
                
            </div>
            <p style={{fontSize:'30px', paddingBottom:'20px'}}>TOTAL $ {costoTotal()}</p> 
            <button className="botonAccion">TERMINAR MI COMPRA</button>
            <button className= 'botonAccion' onClick={()=> borrarCarrito()}>ELIMINAR</button>
        </div>
    )
            
}

export default Cart